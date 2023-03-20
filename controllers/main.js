const getAll = async (req, res, model) => {
    await model.find({})
        .then(data => {
            data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
                res.status(200).json({ success: true, data })
        })
        .catch(err => res.status(400).json({ success: false, err }))
}
const getById = async (req, res, model) => {
    await model.findById(req.params.id)
        .then(result => {
            res.status(200).json({ success: true, result })
        })
        .catch(err => res.status(400).json({ success: true, err }))
}
const create = async (req, res, model) => {
    await model.insertMany(req.body.data)
        .then(() => res.status(200).json({ success: true, message: "data added successfully" }))
        .catch(err => { res.status(400).json({ success: false, err }) })
}
const updateOne = async (req, res, model) => {
    await model.findByIdAndUpdate(req.params.id, req.body.data)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(err => res.status(400).json({ success: false, err }))
}
const deleteOne = async (req, res, model) => {
    await model.findByIdAndDelete(req.params.id)
        .then(() => { res.status(200).json({ success: true }) })
        .catch(err => res.status(400).json({ success: false, err }))
}

module.exports = {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}