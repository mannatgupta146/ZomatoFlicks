const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    video:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    foodPartner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodPartner"
    }
})

const foodModel = mongoose.model("food", foodSchema);

module.export = foodModel;