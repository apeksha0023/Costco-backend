const mongoose=require('mongoose');

const locationSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    versionKey:false
})

const LocationModel=mongoose.model('location',locationSchema)

module.exports=LocationModel