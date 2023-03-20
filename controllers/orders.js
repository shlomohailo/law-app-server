const ordersModel = require('../models/orders');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main')

const getAllOrders = async (req, res) => {
    await ordersModel.find({})
    .populate("client")
    .populate("handleLawyer")
    .populate("agreements")
    .then(data => {
        data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
            res.status(200).json({ success: true, data })
    })
    .catch(err => res.status(400).json({ success: false, err }))
}
const getOrderById = (req, res) => {
    getById(req, res, ordersModel)
}
const createNewOrder = (req, res) => {
    create(req, res, ordersModel)
}
const updateOrder = (req, res) => {
    updateOne(req, res, ordersModel)
}
const deleteOrder = (req, res) => {
    deleteOne(req, res, ordersModel)
}

module.exports = {
    getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder
}