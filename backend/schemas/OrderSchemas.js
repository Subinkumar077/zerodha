import { Schema } from "mongoose"

const OrderSchemas = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

modules.exports = { OrderSchemas }    