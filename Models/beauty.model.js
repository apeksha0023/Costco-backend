const mongoose=require('mongoose');

const beautySchema=new mongoose.Schema({
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

const BeautyModel=mongoose.model('beauty',beautySchema)

module.exports=BeautyModel