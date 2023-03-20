const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recommendation = new Schema(
    {
        from: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        to: [{ type: mongoose.Types.ObjectId, ref: "users" }],
        recommendations: { type: String, required: true },
        stars: { type: Number, required: true }
    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('recommendations', Recommendation);