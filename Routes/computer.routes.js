const express=require('express');
const ComputerModel=require('../Models/computer.model');


const computerRouter=express.Router();

computerRouter.post('/create-computerproducts',async(req,res)=>{
    try {
        const {img,price,title,description}=req.body;
        const computer = new ComputerModel({
            img,price,title,description
        })

        await computer.save();
        res.status(201).send('Product added successfully')
    } catch (error) {
        res.status(404).json({message:`Error while retrieving product data ${error}`});

        
    }
})

computerRouter.get('/get-computerproducts',async(req,res)=>{
    try {
        const computer =await ComputerModel.find();
        res.status(200).json({
            message:"Product data retrieved successfully",computer
        })
    } catch (error) {
    res.status(404).json({message:`Error while retrieving product data ${error}`});
        
    }
})

computerRouter.get('/get-computerproduct/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const computer =await BabyModel.findById(id);
        res.status(200).json({
            message:"Single product fetched",computer
        })

    } catch (error) {
        res.status(404).send(`Error while fetching product with Id ${error}`)
    }
})


module.exports=computerRouter