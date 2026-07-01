import { model } from "mongoose";
import HoldingSchema from "../schemas/HoldingSchemas.js";

const HoldingModel = model("Holding", HoldingSchema);

export default HoldingModel;