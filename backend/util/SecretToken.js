import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const createSecretToken = (id) => {
    const secret = process.env.TOKEN_KEY || "fallback_super_secret_key_12345";
    return jwt.sign({ id }, secret, {
        expiresIn: "3d",
    });
};

export default createSecretToken;