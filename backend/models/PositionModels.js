import { model } from "mongoose";
import PositionSchema from "../schemas/PositionSchemas.js";

const PositionModel = model("Position", PositionSchema);

export default PositionModel;