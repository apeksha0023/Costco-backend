const express=require('express');
const WomenClothModel=require('../Models/womenCloth.model');


const womenClothRouter=express.Router();

womenClothRouter.post('/create-womenClothproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const womenCloth = new WomenClothModel({
            img,price,title,description
        })

        await womenCloth.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

womenClothRouter.get('/get-womenClothproducts',async(req,res)=>{
    try {
        const womenCloth =await WomenClothModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",womenCloth
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

womenClothRouter.get('/get-womenClothproducts/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const womenCloth =await WomenClothModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",womenCloth
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=womenClothRouter