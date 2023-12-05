
// import { TextField, Button, Select, MenuItem } from "@material-ui/core";
// import { ChangeEvent } from "react";
// import { StatusType, formType } from "../types/types";

// const MyForm = ({
//   handleSubmit,
//   handleInputChange,
//   rest,
//   submit,
//   proof
// }: {
//   handleSubmit: (e:string) => void;
//   handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   rest: formType;
//   submit: StatusType;
//   proof:string[]
// }) => {
//   return (
//     <>
//       <form
//         style={{
//           position: "absolute",
//           left: "50%",
//           top: "35%",
//           transform: "translate(-50%, -50%)",
//           width: 400,
//           textAlign: "center",
//         }}
//       >
//         <TextField
//           name="fname"
//           label="Fname"
//           value={rest.fname}
//           onChange={handleInputChange}
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 16 }}
//         />
//         <TextField
//           name="lname"
//           label="Lname"
//           value={rest.lname}
//           onChange={handleInputChange}
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 16 }}
//         />
//         <TextField
//           name="DOB"
//           type="date"
//           value={rest.DOB}
//           onChange={handleInputChange}
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 16 }}
//         />
        
//         <Select label='proof1' onChange={handleInputChange}>
//             <MenuItem>Select One</MenuItem>
//             {
//               proof.map((element)=>(
//                 <MenuItem>{element}</MenuItem>
//               ))
//             }
//         </Select>
//       <TextField
//           name="id1"
//           label="id1"
//           value={rest.id1}
//           onChange={handleInputChange}
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 16 }}
//         />
//       <br />

//       <Select label='proof2' onChange={handleInputChange}>
//             <MenuItem>Select One</MenuItem>
//             {
//               proof.map((element)=>(
//                 <MenuItem>{element}</MenuItem>
//               ))
//             }
//       </Select>
//       <TextField
//           name="id2"
//           label="id2"
//           value={rest.id2}
//           onChange={handleInputChange}
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 16 }}
//         />

//         {submit.status.map((status) => (
//           <Button onClick={()=>handleSubmit(status)} variant="outlined">{status}</Button>
//         ))}

//       </form>
//     </>
//   );
// };

// export default MyForm;




















import React, { ChangeEvent } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { StatusType, formType } from "../types/types";

const MyForm = ({
  handleSubmit,
  handleInputChange,
  rest,
  submit,
  proof,
}:{
  handleSubmit: (e: string) => void;
  handleInputChange: (e: ChangeEvent<any>) => void;
  rest: formType;
  submit: StatusType;
  proof: string[];
}) => {
  return (
    <form
      style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
        width: 300,
        textAlign: "center",
      }}
    >
      <TextField
        name="fname"
        label="Fname"
        value={rest.fname}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
      />
      <TextField
        name="lname"
        label="Lname"
        value={rest.lname}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
      />
      <TextField
        name="DOB"
        type="date"
        value={rest.DOB}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
      />

<FormControl fullWidth variant="outlined" style={{ marginBottom: 16 }}>
  <InputLabel>Proof 1</InputLabel>
  <Select
    name="proof1"
    value={rest.proof1}  
    onChange={handleInputChange}
    label="Proof 1"
  >
    <MenuItem disabled>Select One</MenuItem>
    {proof.map((element) => (
      <MenuItem key={element} value={element}>
        {element}
      </MenuItem>
    ))}
  </Select>
</FormControl>

      <TextField
        name="id1"
        label="ID 1"
        value={rest.id1}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
      />

<FormControl fullWidth variant="outlined" style={{ marginBottom: 16 }}>
  <InputLabel>Proof 2</InputLabel>
  <Select
    name="proof2"
    value={rest.proof2}
    onChange={handleInputChange}
    label="Proof 2"
  >
    <MenuItem disabled>Select One</MenuItem>
    {proof.map((element) => {
      if (element !== rest.proof1) {
        return (
          <MenuItem key={element} value={element}>
            {element}
          </MenuItem>
        );
      }
      return null; 
    })}
  </Select>
</FormControl>


      <TextField
        name="id2"
        label="ID 2"
        value={rest.id2}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
      />

      {submit.status.map((status) => (
        <Button
          key={status}
          onClick={() => handleSubmit(status)}
          variant="outlined"
        >
          {status}
        </Button>
      ))}
    </form>
  );
};

export default MyForm;
