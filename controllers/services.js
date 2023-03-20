const servicesModel = require('../models/services');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main')


const getAllServices = async (req, res) => {
    await servicesModel.find({})
        .populate({
            path: 'subService',
            populate: {
                path: 'lawyers', populate: { path: 'recommendations', populate: { path: 'from' } },
            }
        })
        .then(data => {
            data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
                res.status(200).json({ success: true, data })
        })
        .catch(err => res.status(400).json({ success: false, err }))
}
const getServiceById = (req, res) => {
    getById(req, res, servicesModel)
}
const createNewService = (req, res) => {
    create(req, res, servicesModel)
}
const updateService = (req, res) => {
    updateOne(req, res, servicesModel)
}
const deleteService = (req, res) => {
    deleteOne(req, res, servicesModel)
}

module.exports = {
    getAllServices,
    getServiceById,
    createNewService,
    updateService,
    deleteService
}