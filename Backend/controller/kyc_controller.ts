import { error } from 'console';
import express, {Request,Response} from 'express'
import { deletedata, getdata, postdata, updatedata } from '../service/kyc_service';

export const router = express.Router();

router.post('/post',async(req:Request,res:Response)=>{
    try{
        const data=req.body;
        const result =await postdata(data);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
})

router.get('/get',async(req:Request,res:Response)=>{
    try{
        const result=await getdata();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error)
    }
})

router.put('/update/:id',async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const data = req.body;
        const result = updatedata(id,data);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error)

    }
})

router.delete('/delete/:id',async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const result = deletedata(id);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error)
    }
})