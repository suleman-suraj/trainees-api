const express = require("express")
const{ createTrainee, getAllTrainees, getSingleTrainee, updateTrainee, deleteTrainee } = require("../controllers/traineesController")
const protect = require("../middlewares/authMiddleware")
const router = express.Router()

router.route("/").post(protect,createTrainee).get(protect,getAllTrainees)
router.route("/:_id").get(protect,getSingleTrainee).put(protect,updateTrainee).delete(protect,deleteTrainee)

module.exports = router;
