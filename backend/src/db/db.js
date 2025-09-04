const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/zomato-flicks")
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err);
        
    })
}

module.exports = connectDB;