const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const sequelize=require('./connection/database');
const Count=require('./model/count.js');
const ejs=require('ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.set('view enjine','ejs');
app.get('/',async(req,res,next)=>{
   let count= await Count.findAll()
    res.render('home',{test:count});
});
app.post('/',async(req,res)=>{
    const{name,description,price,quantity}=req.body;
   await Count.create({
    name:name,
    description:description,
    price:price,
    quantity:quantity
   })
   res.redirect('/');
})
app.get('/reduce1',async(req,res)=>{
    const id=req.query.id;
   const result= Count.findOne({where:{
        id:id
    }});
    const quant=Number(result.quantity)-1;
   await Count.update({
        quanity:quant
    },{where:{
        id:id
    }})
    res.redirect('/');
})
app.get('/reduce2',async(req,res)=>{
    const id=req.query.id;
   const result= Count.findOne({where:{
        id:id
    }});
    const quant=Number(result.quantity)-2;
   await Count.update({
        quanity:quant
    },{where:{
        id:id
    }})
    res,redirect('/');
})
app.get('/reduce3',async(req,res)=>{
    const id=req.query.id;
   const result= Count.findOne({where:{
        id:id
    }});
    const quant=Number(result.quantity)-3;
   await Count.update({
        quanity:quant
    },{where:{
        id:id
    }})
    res.redirect('/');
})





sequelize.sync({force:true});
app.listen(3000);