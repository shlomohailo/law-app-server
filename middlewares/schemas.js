const {
    validate
} = require("../models/users")

const validateUserSchema = async (req, res, next) => {
    const { error } = validate(req.body.data)
    if (error) {
        console.log(error);
        return res.status(400).json({ message: error.details })
    }
    next()
}

module.exports = {
    validateUserSchema
}