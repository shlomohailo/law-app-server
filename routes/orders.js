const router = require("express").Router()
const {
    getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder,
} = require("../controllers/orders")

router.get("/", getAllOrders)
router.get("/getById/:id", getOrderById)
router.post("/create", createNewOrder)
router.put("/update/:id", updateOrder)
router.delete("/delete/:id", deleteOrder)


module.exports = router