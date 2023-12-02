
import { dataType } from "../types/types"
import kycModel from "../schema/schema"
import { error } from "console";

export const postdata = async(data:dataType) =>{
    const id1=data.id1;
    const id2=data.id2;
    let res1=0;let res2=0;
    Array.from(id1).forEach(char => {
        if(Number(char)){
         res1=res1+Number(char);
        }
    });
    Array.from(id2).forEach(char => {
        if(Number(char)){
         res2=res2+Number(char);
        }
    });
    if(res1%2==0 && res2%2==0){
        const newData = new kycModel(data);
        return await newData.save();
    }
    else{
        return error;
    }
}
export const getdata = async()=>{
    return await kycModel.find();
}

export const updatedata = async(id:string,data:dataType) =>{
    const result = await kycModel.updateOne({_id:id},data);
    return result;
}

export const deletedata = async(id:string) =>{
    const result = await kycModel.deleteOne({_id:id});
    return result;
}