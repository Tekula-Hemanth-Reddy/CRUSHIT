import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react' 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import history from '../../../history/history';

import './signIn.css';
import authContext from '../../../context/auth-context';


function SignIn() {
  const [nameTextValue,setNameTextValue] = useState("");

  const AuthContext = useContext(authContext)

  const handleSubmit = () =>{
    if(nameTextValue !==""){
      AuthContext.login(nameTextValue,0);
      // sessionStorage.setItem("username", JSON.stringify(nameTextValue));
      // sessionStorage.setItem("passed", JSON.stringify(0));
      // sessionStorage.setItem("games", JSON.stringify(0));
      history.push('/entry');
      window.location.reload(false);
    }
  }
    return (
      <Box className='sign-in-header'
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField className='sign-text-field' id="outlined-basic" label="user Name" variant="outlined" onChange={(data)=>setNameTextValue(data.target.value)}
        value={nameTextValue}/>
          <Button variant="contained" onClick={handleSubmit}>CRUSH IT</Button>
      </Box>
    );
  }

  export default SignIn;