const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubService = new Schema(
    {
        agreementName: { type: String, required: true },
        agreementDescription: { type: String, required: true },
        lawyers: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        basicService: { service: String, price: Number, },
        goldService: { service: String, price: Number },
        premiumService: { service: String, price: Number },
        priceType: { type: String, required: true }
    },
    {
        timeseries: true,
        timestamp: true
    }
)

module.exports = mongoose.model('subServices', SubService)