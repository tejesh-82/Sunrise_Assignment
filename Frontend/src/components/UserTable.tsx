// import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import { dataType } from "../types/types";

// const UserTable = (allData:dataType) => {
//   return (
//     <>
//       <Table sx={{position:'absolute', left:'60%',right:'40%', top:'100%', transform:'translate(-50%,-50%)'}}>
//         <TableHead>
//             <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>NAME</TableCell>
//                 <TableCell>STATUS</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {
//                 allData.map((element,index)=>(
//                     <TableRow key={index}>
//                         <TableCell>{element.id1}</TableCell>
//                         <TableCell>{element.fname} {element.lname}</TableCell>
//                         <TableCell>{element.status}</TableCell>
//                         <TableCell onClick={()=>{updateData(element)}}>Update</TableCell>
//                         <TableCell onClick={()=>{deleteData(element._id)}}>Delete</TableCell>
//                     </TableRow>
//                 ))
//             }
//         </TableBody>
//       </Table>
//     </>
//   )
// }

// export default UserTable
