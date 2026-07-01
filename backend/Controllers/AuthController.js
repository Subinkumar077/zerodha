import User from "../models/UserModel.js";
import createSecretToken from "../util/SecretToken.js";
import bcrypt from "bcrypt";

export const Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body || {};
        if (!email || !password || !username) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists",
                success: false,
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
            username,
            createdAt,
        });

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production with HTTPS
            sameSite: "lax",
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body || {};
        if (!email || !password) {
            return res.json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "Incorrect password or email" });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: "Incorrect password or email" });
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set to true in production
            sameSite: "lax",
        });
        res.status(201).json({ message: "User logged in successfully", success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};