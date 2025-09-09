const foodPartnerModel = require('../models/foodPartner.model')

async function getFoodPartnerById(req, res){
    const foodPartnerId = req.params.foodPartnerId

    const foodPartner = await foodPartnerModel.findById(foodPartnerId)

    if(!foodPartner){
        return res.status(404).json({
            message: "Food partner not found"
        })
    }

    res.status(200).json({
        message: "Food partner retrieved successfully",
        foodPartner
    })
}

module.exports = {
    getFoodPartnerById
}