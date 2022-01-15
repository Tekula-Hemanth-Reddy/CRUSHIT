import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './rules.css';
import history from '../../history/history';

import Four from '../../images/four.jpeg';
import Three from '../../images/three.jpeg';
import TwoA from '../../images/twoc.jpeg';
import TwoB from '../../images/twom.jpeg';
import Onei from '../../images/onei.jpeg';
import Oneo from '../../images/oneo.jpeg';
import One from '../../images/one.jpeg';
import Output from '../../images/output.jpeg';
import Arrow from '../../images/right.png';


function Rules() {

  return (
    <div className="rules">
      <header className="rules-header">
      <h1 style={{color:"#ffffff"}}><strong style={{color:"#fac564",marginTop:"10%"}}>CRUSHIT RULES</strong></h1>
        <Box className='rules-login' sx={{ bgcolor: '#282c34' }}>
            
            <ul>
                <li className='rules-link'>If a button is surrounded by 4 buttons if you press that button then those 5 buttons will disappear.<br/>
                <img src={Four} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Output} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                </li>
                <li className='rules-link'>If a button is surrounded by 3 buttons if you press that button then those 4 buttons will disappear.<br/>
                <img src={Three} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Output} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                </li>
                <li className='rules-link'>If a button is surrounded by 2 buttons if you press that button then those 3 buttons will disappear.<br/>
                <img src={TwoA} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Output} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <br/>
                <img src={TwoB} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Output} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                </li>
                <li className='rules-link'>If a button have only 1 adjacent button if you press that button then that button will disappear.<br/>
                <img src={Onei} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Oneo} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                </li>
                <li className='rules-link'>If you left with no button to crush then you are the WINNER.<br/>
                <img src={One} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={Arrow} alt="logo" style={{width:'10%',height:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                <img src={One} alt="logo" style={{width:'10%',height:'10%',marginRight:'10%',marginLeft:'10%',marginTop:"1%",marginBottom:'1%'}}/>
                </li>
            </ul>
        </Box>
        <Button variant="contained" color="success"style={{width:'10%',height:'30%',marginTop:"3%",marginBottom:'5%'}} onClick={()=>{history.push('/game');window.location.reload(false)}}>Enter</Button>
      </header>
    </div>
  );
}

export default Rules;
