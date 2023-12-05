import exp from 'constants';
import mongoose, { Schema } from 'mongoose';
import { dataType } from '../types/types';


const KYC=new Schema<dataType>({
    fname:{
        type:String,required:true
    },
    lname:{
        type:String,required:true
    },
    DOB:{
        type:String,required:true
    },
    proof1:{type:String,required:true},
    id1:{type:String,required:true},
    proof2:{type:String,required:true},
    id2:{type:String,required:true},
    status:{type:String,default:'pending'}
})

const kycModel = mongoose.model<dataType>('kycusers',KYC);

export default kycModel;