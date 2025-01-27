const express=require('express');
const coursesRoutes=express.Router();

//all the adminroutes:
coursesRoutes.route('/').get(()=>{})

module.exports= coursesRoutes;