import { proof } from "../types/types";

import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import { ChangeEvent } from "react";
import { StatusType, formType } from "../types/types";

const MyForm = ({
  handleSubmit,
  handleInputChange,
  rest,
  submit,
}: {
  handleSubmit: (e:string) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rest: formType;
  submit: StatusType;
}) => {
    console.log(proof);
  return (
    <>
      <form
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: 400,
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
          label="dob"
          type="date"
          value={rest.DOB}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
        />
        
        <Select>
            <MenuItem>Select One</MenuItem>
        </Select>
      <TextField
          name="id1"
          label="id1"
          value={rest.id1}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
        />
      <br />
      
      <Select>
            <MenuItem>Select One</MenuItem>
      </Select>
      <TextField
          name="id2"
          label="id2"
          value={rest.id2}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
        />

        {submit.status.map((status) => (
          <Button onClick={()=>handleSubmit(status)} variant="outlined">{status}</Button>
        ))}

      </form>
    </>
  );
};

export default MyForm;











