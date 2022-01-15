import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../admin/App.css';
import Wings from '../../images/wings.png';
import history from '../../history/history';


function EntryPass() {

    const name=JSON.parse(sessionStorage.getItem("username"));
    const win=JSON.parse(sessionStorage.getItem("passed"));
    const Row = JSON.parse(sessionStorage.getItem("row"));
    const Col = JSON.parse(sessionStorage.getItem("col"));

  return (
    <div className="App">
      <header className="App-header">
        <Box className='App-login' sx={{ bgcolor: '#282c34' }}>
            <h1 className='entry-text'>Hello {name}!</h1>
            <h2 style={{color:"#ffffff"}}>Welcome to <i><strong style={{color:"#fac564"}}>CRUSHIT</strong></i></h2>
            <img src={Wings} alt="logo" style={{width:'100%',height:'100%'}}/>
            <h2 className='entry-text'>Game Level : <strong style={{color:"#fac564"}}>{Row}{" X "}{Col}</strong></h2>
            <h2 className='entry-text'>Games won : <strong style={{color:"#fac564"}}>{win}</strong></h2>
            <Button variant="contained" color="success" style={{marginRight:"10%",marginBottom:"20%"}} onClick={()=>{history.push('/game');window.location.reload(false)}}>ENTER</Button>
            <Button variant="contained" color="secondary" style={{marginLeft:"10%",marginBottom:"20%"}} onClick={()=>{history.push('/rules');window.location.reload(false)}}>RULES</Button>
        </Box>
      </header>
    </div>
  );
}

export default EntryPass;
