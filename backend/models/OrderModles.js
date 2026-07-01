import { model } from "mongoose";
import { OrderSchemas } from "../schemas/OrderSchemas.js";

const OrderModel = model("Holding", OrderSchemas);

export default OrderModel;