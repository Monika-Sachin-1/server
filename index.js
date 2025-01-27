//all the require modules
const express=require('express')
const app=express();
const cors=require('cors');

app.use(cors({
    origin:'',
    credentials:true
}))
app.use(express.json())

//all the 

