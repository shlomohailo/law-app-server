const { usersModel } = require('../models/users');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main')


const getAllUsers = async (req, res) => {
    await usersModel.find({})
        .populate("subServices")
        .populate("recommendations")
        .then(data => {
            data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
                res.status(200).json({ success: true, data })
        })
        .catch(err => res.status(400).json({ success: false, err }))
}
const getAllLawyers = async (req, res) => {
    await usersModel.find({role:"lawyer"})
    .then(data => {
        data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
            res.status(200).json({ success: true, data })
    })
    .catch(err => res.status(400).json({ success: false, err }))
}
const getUserById = (req, res) => {
    getById(req, res, usersModel)
}
const createNewUser = (req, res) => {
    create(req, res, usersModel)
}
const updateUser = (req, res) => {
    updateOne(req, res, usersModel)
}
const deleteUser = (req, res) => {
    deleteOne(req, res, usersModel)
}

module.exports = {
    getAllUsers,
    getAllLawyers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
}