import express from 'express'
import mongoose from 'mongoose'

const app=express();

app.listen(5000,()=>{
    console.log('server runnong on 5000');
    mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
        console.log('db connected');
    })
})