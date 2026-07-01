import { Schema } from "mongoose"

const PositionSchemas = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

modules.exports = { PositionSchemas }    