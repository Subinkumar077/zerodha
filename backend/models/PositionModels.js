import { model } from "mongoose";
import { PositionSchemas } from "../schemas/PositionSchemas.js";

const PosotionModel = model("Holding", PositionSchemas);

export default PosotionModel;