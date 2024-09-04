const express=require('express');
const FurnitureModel=require('../Models/furniture.model');


const furnitureRouter=express.Router();

furnitureRouter.post('/create-furnitureproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const furniture = new FurnitureModel({
            img,price,title,description
        })

        await furniture.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

furnitureRouter.get('/get-furnitureproducts',async(req,res)=>{
    try {
        const furniture =await FurnitureModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",furniture
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

furnitureRouter.get('/get-furnitureproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const furniture =await FurnitureModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",furniture
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=furnitureRouter