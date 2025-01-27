const express=require('express');
const adminRoutes=express.Router();

//all the adminroutes:
adminRoutes.route('/').get(()=>{})

module.exports= adminRoutes;