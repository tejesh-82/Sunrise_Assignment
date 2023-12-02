import express from 'express'
import mongoose from 'mongoose'
import { router } from './controller/kyc_controller';
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());

app.use('/kyc',router);

app.listen(5000,()=>{
    console.log('server runnong on 5000');
    mongoose.connect('mongodb://127.0.0.1:27017/KYCDB').then(()=>{
        console.log('db connected');
    })
})