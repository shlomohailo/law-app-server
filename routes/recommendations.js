const router = require("express").Router();
const {
    getAllRecommendations,
    getRecommendationById,
    createNewRecommendation,
    updateRecommendation,
    deleteRecommendation,
} = require("../controllers/recommendations");

router.get("/", getAllRecommendations);
router.get("/getById/:id", getRecommendationById);
router.post("/create", createNewRecommendation);
router.put("/update/:id", updateRecommendation);
router.delete("/delete/:id", deleteRecommendation);


module.exports = router;