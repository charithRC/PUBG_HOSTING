const HttpError=require('../models/http-error');
const User=require('../models/user');
const express = require('express');


const phonesignup=async(req,res,next)=>{
     const {phonenumber}=req.body;  
     let existingUser;
    try{
        existingUser=await User.findOne({phonenumber:phonenumber});

    }catch(err){
        const error=new HttpError('Error While Connecting',500);
        return next(error);
    }
 
    if(existingUser){
           // const error=new HttpError('user exit already plz login insted',422);
            //return next(error);
        res.json({existingUser})    
    }else{

        const createdUsers=new User({
            phonenumber,   
        });
        try{
            await createdUsers.save();
        }catch(err){
            const error=new HttpError('Invalid Phonenumber Please try again',500);
            return next(error); 
        }
        res.status(201).json({users:createdUsers.toObject({getters:true})});
    }
};
exports.phonesignup=phonesignup;
