const router = require("express").Router()
const {
    getAllServices,
    getServiceById,
    createNewService,
    updateService,
    deleteService
} = require("../controllers/services")

router.get("/", getAllServices)
router.get("/getById/:id", getServiceById)
router.post("/create", createNewService)
router.put("/update/:id", updateService)
router.delete("/delete/:id", deleteService)


module.exports = router