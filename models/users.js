const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")

const User = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String },
        profileImg: { type: String },
        subServices: [{ type: mongoose.Types.ObjectId, ref: "subServices" }],
        recommendations: [{ type: mongoose.Types.ObjectId, ref: "recommendations" }],
        address: { city: String, street: String },
        license: { type: Number }
    },
    {
        timeseries: true,
        timestamps: true
    }
)

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email().required(),
        role: Joi.string(),
        profileImg: Joi.string(),
        subServices: Joi.array(),
        recommendations: Joi.array(),
        address: Joi.object(),
        license: Joi.number(),
        password: passwordComplexity().required(),
        confirmPassword: Joi.string(),
        phoneNumber: Joi.string().min(10).max(10)
    })
    return schema.validate(data)
}
const usersModel = mongoose.model("users", User)

module.exports = {
    usersModel,
    validate
}