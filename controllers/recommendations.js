const recommendationsModel = require('../models/recommendations');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main')

const getAllRecommendations = async (req, res) => {
    await recommendationsModel.find({})
        .populate("from")
        .populate("to")
        .then(data => {
            data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
                res.status(200).json({ success: true, data })
        })
        .catch(err => res.status(400).json({ success: false, err }))
}
const getRecommendationById = (req, res) => {
    getById(req, res, recommendationsModel)
}
const createNewRecommendation = (req, res) => {
    create(req, res, recommendationsModel)
}
const updateRecommendation = (req, res) => {
    updateOne(req, res, recommendationsModel)
}
const deleteRecommendation = (req, res) => {
    deleteOne(req, res, recommendationsModel)
}

module.exports = {
    getAllRecommendations,
    getRecommendationById,
    createNewRecommendation,
    updateRecommendation,
    deleteRecommendation
}