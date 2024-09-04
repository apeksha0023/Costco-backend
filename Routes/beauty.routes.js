const express=require('express');
const BeautyModel=require('../Models/beauty.model');


const beautyRouter=express.Router();

beautyRouter.post('/create-beautyproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const beauty = new BeautyModel({
            img,price,title,description
        })

        await beauty.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

beautyRouter.get('/get-beautyproducts',async(req,res)=>{
    try {
        const beauty =await BeautyModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",beauty
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

beautyRouter.get('/get-beautyproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const beauty =await BeautyModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",beauty
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=beautyRouter