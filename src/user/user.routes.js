const express=require('express');
const userRoutes=express.Router();

//all the adminroutes:
userRoutes.route('/').get(()=>{})

module.exports= userRoutes;