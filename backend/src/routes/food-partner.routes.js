const express = require('express')
const router = express.Router()

/* GET /api/food-partner/:id*/
router.get('/food-partner/:id',authMiddleware.authUserMiddleware, foodController.getFoodPartnerById)

module.exports = router