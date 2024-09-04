const mongoose=require('mongoose');

const womenClothSchema=new mongoose.Schema({
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

const WomenClothModel=mongoose.model('womenCloth',womenClothSchema)

module.exports=WomenClothModel