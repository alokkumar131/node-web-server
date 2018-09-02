const express=require('express');
const router=express.Router();
const path=require('path');
router.get('/',(req,res)=>{
    res.render('index.hbs')
})
router.get('/about',(req,res)=>{
    res.render('about.hbs')
})
router.get('/services',(req,res)=>{
    res.render('services.hbs')
})
router.get('/contact',(req,res)=>{
    res.render('contact.hbs')
})
module.exports=router;