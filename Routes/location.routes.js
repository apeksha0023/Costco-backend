const express=require('express');
const LocationModel=require('../Models/location.model');


const locationRouter=express.Router();

locationRouter.post('/create-locationproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const location = new LocationModel({
            img,price,title,description
        })

        await location.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

locationRouter.get('/get-locationproducts',async(req,res)=>{
    try {
        const location =await LocationModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",location
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

locationRouter.get('/get-locationproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const location =await LocationModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",location
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=locationRouter