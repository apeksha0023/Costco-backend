const mongoose=require('mongoose');

const menClothSchema=new mongoose.Schema({
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

const MenClothModel=mongoose.model('menCloth',menClothSchema)

module.exports=MenClothModel