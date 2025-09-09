const foodModel = require('../models/food.model')
const storageService = require('../services/storage.service')
const likeModel = require('../models/likes.model')
const { v4: uuid} = require('uuid')

async function createFood(req, res){
    
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id,
    })

    res.status(201).json({
        message: "Food item created sucessfully",
        food: foodItem
    })
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}

async function likeFood(req, res){
    const {foodId} =req.body
    const user = req.user

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId
    })

    if(isAlreadyLiked){
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId,{
            $inc: {likeCount: -1}
        })

        return res.status(200).json({
            message: "Food unlike successfully"
        })
    }

    const like  = await likeModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId,{
            $inc: {likeCount: 1}
        })

    res.status(201).json({
        message: "Food liked successfully",
        like
    })
}

module.exports = {
    createFood,
    getFoodItems,
    likeFood
}