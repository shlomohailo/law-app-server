const router = require("express").Router()
const {
    getAllSubServices,
    getSubServiceById,
    createNewSubService,
    updateSubService,
    deleteSubService
} = require("../controllers/sub-services")

router.get("/",getAllSubServices)
router.get("/getById/:id",getSubServiceById)
router.post("/create",createNewSubService)
router.put("/update/:id",updateSubService)
router.delete("/delete/:id",deleteSubService)


module.exports = router