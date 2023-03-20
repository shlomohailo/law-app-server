const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Service = new Schema(
    {
        serviceName: { type: String, required: true },
        serviceImg: { type: String, required: true },
        subService: [{ type: mongoose.Types.ObjectId, ref: "subServices" }]
    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('services', Service)