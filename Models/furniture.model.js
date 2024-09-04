const mongoose=require('mongoose');

const furnitureSchema=new mongoose.Schema({
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

const FurnitureModel=mongoose.model('furniture',furnitureSchema)

module.exports=FurnitureModel