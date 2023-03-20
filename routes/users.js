const router = require("express").Router()
const {
    getAllUsers,
    getAllLawyers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require("../controllers/users")

const {
    signUp,
    signIn
} = require("../middlewares/accsess")
const { validateUserSchema } = require("../middlewares/schemas")

router.get("/",getAllUsers)
router.get("/getAllLawyers", getAllLawyers)
router.get("/getById/:id",getUserById)
router.post("/signUp",validateUserSchema, signUp)
router.post("/signIn", signIn)
router.post("/create",createNewUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)


module.exports = router