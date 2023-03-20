const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ClientDetailsSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email : { type: String, required: true },
        gender: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        moreInfo: { type: String, required: true }
    }
)

const Order = new Schema(
    {
        orderNumber: { type: Number, required: true },
        client: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        handleLawyer: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        agreements: [{ type: mongoose.Types.ObjectId, ref: "subServices" }],
        clientDetails: ClientDetailsSchema,
        totalPrice: { type: Number, required: true }
    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('orders', Order)