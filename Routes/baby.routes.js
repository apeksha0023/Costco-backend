const express=require('express');
const BabyModel=require('../Models/baby.model');


const babyRouter=express.Router();

babyRouter.post('/create-babyproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const baby = new BabyModel({
            img,price,title,description
        })

        await baby.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

babyRouter.get('/get-babyproducts',async(req,res)=>{
    try {
        const baby =await BabyModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",baby
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

babyRouter.get('/get-babyproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const baby =await BabyModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",baby
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=babyRouter