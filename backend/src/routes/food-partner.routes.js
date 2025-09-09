const express = require('express')
const foodPartnerController = require('../controllers/food-partner.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()

/* GET /api/food-partner/:id*/
router.get('/food-partner/:id',authMiddleware.authUserMiddleware, foodController.getFoodPartnerById)

module.exports = router