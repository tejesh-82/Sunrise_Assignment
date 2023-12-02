import axios from "axios";
import { dataType, formType } from "../types/types";

const url=`http://localhost:5000/kyc`;

export const postdata = async(formData:formType)=>{
    const data = await axios.post(url+`/post`,formData);
    return data.data;
}

export const getdata = async()=>{
    const data=await axios.get(url+`/get`);
    return  data.data;
}

export const deletedata = async(id:string) =>{
    const data = await axios.delete(url+`/delete/${id}`);
    return data;
}

export const updatedata = async(id:string,editFormData:formType) =>{
    const data = await axios.put(url+`/update/${id}`,editFormData);
    return data;
}