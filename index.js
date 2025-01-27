//all the require modules
const express=require('express')
const app=express();
const cors=require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(cors({
    origin:'',
    credentials:true
}))
app.use(express.json())

//all the 
app.listen(process.env.PORT,()=>{})

