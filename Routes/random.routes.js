const express=require('express');
const RandomModel=require('../Models/random.model');


const randomRouter=express.Router();

randomRouter.post('/create-randomproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const random = new RandomModel({
            img,price,title,description
        })

        await random.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

randomRouter.get('/get-randomproducts',async(req,res)=>{
    try {
        const random =await RandomModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",random
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

randomRouter.get('/get-randomproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const random =await RandomModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",random
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=randomRouter