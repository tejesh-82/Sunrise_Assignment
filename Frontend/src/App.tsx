import {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import MyForm from "./components/MyForm"
import { StatusType, dataType, formType } from './types/types'
import { deletedata, getdata, postdata, updatedata } from './ApiCalls/Apicalls';
import { proof } from './types/types';

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const App = () => {
  const [postSelect,setPostSelect]=useState<boolean>(true);
  const [EditSelect,setEditSelect]=useState<boolean>(false);
  

  const [submit,setSubmit]=useState<StatusType>({status:['submit']});
  






  const [allData,setAllData]=useState<dataType[]>([])
  
  const[formData,setFormData]=useState<formType>({
    fname:'',
    lname:'',
    DOB:'',
    id1:'',
    id2:'',
  })
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
    console.log(formData.id1);
  }

  const handleSubmit = (e:string) =>{
    const result = postdata(formData);
    getData();
    console.log(result);
  }

  const getData = async() =>{
    const data =await getdata();
    setAllData(data);
  }
  
  useEffect(()=>{
    getData();
  },[])
  
  const deleteData = async(id:string) =>{
    const data=await deletedata(id);
    getData();
    console.log(data);
  }

  const[editFormData,setEditFormData]=useState<dataType>({
    _id:'',
    fname:'',
    lname:'',
    DOB:'',
    id1:'',
    id2:'',
    status:''
  })
  const updateData =(element:dataType) =>{
    setEditFormData(element);
    if(element.status=='pending'){
      setEditSelect(true);
      setPostSelect(false);
      setSubmit({ status: ['approve', 'rejected'] });
    }
  }

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setEditFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  const handleEditSubmit = async(e:string) =>{
    editFormData.status=e;
    const result = await updatedata(editFormData._id,editFormData);
    setEditSelect(false);
    setPostSelect(true);
    getData();
    console.log(result);
  }

  return (
    <>
    {
      postSelect && (
        <MyForm handleInputChange={handleInputChange} handleSubmit={handleSubmit}  rest={formData} submit={submit} />
      )
    }

    {
      EditSelect && (
        <MyForm handleInputChange={handleEditInputChange} handleSubmit={handleEditSubmit} rest={editFormData} submit={submit}/>
      )
    }
      <Table sx={{position:'absolute', left:'60%',right:'40%', top:'80%', transform:'translate(-50%,-50%)'}}>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>STATUS</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                allData.map((element,index)=>(
                    <TableRow key={index}>
                        <TableCell>{element.id1}</TableCell>
                        <TableCell>{element.fname} {element.lname}</TableCell>
                        <TableCell>{element.status}</TableCell>
                        <TableCell onClick={()=>{updateData(element)}}>Update</TableCell>
                        <TableCell onClick={()=>{deleteData(element._id)}}>Delete</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>

    </>
  )
}

export default App
