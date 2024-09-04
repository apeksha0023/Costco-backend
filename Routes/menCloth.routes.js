const express=require('express');
const MenClothModel=require('../Models/menCloth.model');


const menClothRouter=express.Router();

menClothRouter.post('/create-menClothproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const menCloth = new MenClothModel({
            img,price,title,description
        })

        await menCloth.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

menClothRouter.get('/get-menClothproducts',async(req,res)=>{
    try {
        const menCloth =await MenClothModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",menCloth
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

menClothRouter.get('/get-menClothproducts/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const menCloth =await MenClothModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",menCloth
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=menClothRouter