const subServicesModel = require('../models/sub-services');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main')

const getAllSubServices = async (req, res) => {
    await subServicesModel.find({})
        .populate({
            path: 'lawyers',
            populate: { path: 'recommendations' }
        })
        .then(data => {
            data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
                res.status(200).json({ success: true, data })
        })
        .catch(err => res.status(400).json({ success: false, err }))
}
const getSubServiceById = (req, res) => {
    getById(req, res, subServicesModel)
}
const createNewSubService = (req, res) => {
    create(req, res, subServicesModel)
}
const updateSubService = (req, res) => {
    updateOne(req, res, subServicesModel)
}
const deleteSubService = (req, res) => {
    deleteOne(req, res, subServicesModel)
}

module.exports = {
    getAllSubServices,
    getSubServiceById,
    createNewSubService,
    updateSubService,
    deleteSubService
}