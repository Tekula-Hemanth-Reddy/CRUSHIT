import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './game.css';
import history from '../../history/history';

function setBorder(e) {
    e.target.style.background = '#61dafb';
    e.target.style.color = '#282c34';
}
function unSetBorder(e){
    e.target.style.background = '#282c34';
    e.target.style.color = 'white';
}

var visibleGrid = [];
var gamePoint=0;

function Game() {

    const [count,setCount] = useState(0);

    const Row = JSON.parse(sessionStorage.getItem("row"));
    const Col = JSON.parse(sessionStorage.getItem("col"));

    const levelPassed = ()=>
    {
        const win = JSON.parse(sessionStorage.getItem("passed"));
        if(Row===12 && Col===12)
        {
            alert("Victory You are the best!");
            sessionStorage.clear();
            history.push('/home');
            window.location.reload(false);
        }
        else if(Col===12)
        {
            sessionStorage.setItem("row", JSON.stringify(Row+1));
            sessionStorage.setItem("col", JSON.stringify(4));
            sessionStorage.setItem("passed", JSON.stringify(win+1));
            alert("Nice Job");
            history.push('/entry');
            window.location.reload(false);
        }
        else{
            sessionStorage.setItem("row", JSON.stringify(Row));
            sessionStorage.setItem("col", JSON.stringify(Col+1));
            sessionStorage.setItem("passed", JSON.stringify(win+1));
            alert("Nice Job");
            history.push('/entry');
            window.location.reload(false);
        }
    }

    var gameGrid = [];
    var cnt=1;

    for(let i=0;i<=(Row*Col);i++)
    {
        visibleGrid.push(false);
    }

    const setGame = (e)=>
    {
        const v=Number(e.target.dataset.msg);
        var visible=0;
        
        //top left corner
        if(v===1)
        {
            if(visibleGrid[2]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[Col+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[2]=true;
                visibleGrid[Col+1]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //top right corner
        else if(v===(Col))
        {
            if(visibleGrid[Col-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[2*Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[Col-1]=true;
                visibleGrid[2*Col]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //bottom left corner
        else if(v===(((Row-1)*Col)+1))
        {
            if(visibleGrid[((Row-2)*Col)+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[((Row-1)*Col)+2]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[((Row-2)*Col)+1]=true;
                visibleGrid[((Row-1)*Col)+2]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
                // gamePoint=gamePoint+1;
                // setCount(count+1);   
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            } 
        }
        //bottom right corner
        else if(v===((Row*Col)))
        {
            if(visibleGrid[(Row*Col)-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[(Row*Col)-Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[(Row*Col)-1]=true;
                visibleGrid[(Row*Col)-Col]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        // top row
        else if(v>1 && v<Col)
        {
            if(visibleGrid[v-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[v-1]=true;
                visibleGrid[v+1]=true;
                visibleGrid[v+Col]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true; 
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //bottom row
        else if(v>(((Row-1)*Col)+1) && v<(Row*Col))
        {
            if(visibleGrid[v-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v-Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[v-1]=true;
                visibleGrid[v+1]=true;
                visibleGrid[v-Col]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //left column
        else if((v%Col)===1)
        {
            if(visibleGrid[v-Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[v-Col]=true;
                visibleGrid[v+Col]=true;
                visibleGrid[v+1]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //right column
        else if((v%Col)===0)
        {
            if(visibleGrid[v-Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[v-Col]=true;
                visibleGrid[v+Col]=true;
                visibleGrid[v-1]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        //inner nodes
        else{
            if(visibleGrid[v-Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+Col]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v-1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visibleGrid[v+1]===false)
            {
                visible=visible+1;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            if(visible>1)
            {
                visibleGrid[v-Col]=true;
                visibleGrid[v+Col]=true;
                visibleGrid[v-1]=true;
                visibleGrid[v+1]=true;
                visibleGrid[v]=true;
                gamePoint=gamePoint+1;
                setCount(count+1);
            }
            else if(visible===1)
            {
                visibleGrid[v]=true;
            }
            else{
                alert("You Lost, try again");
                history.push('/entry');
                window.location.reload(false);
            }
        }
        unSetBorder(e);
        if(gamePoint===(Row*Col))
        {
            levelPassed();
        }
    }

    for(let i=0;i<Row;i++)
    {
        var tempGrid = [];
        for(let j=0;j<Col;j++)
        {
            tempGrid.push(<Button variant="outlined" data-msg={cnt} style={{color:'white'}} disabled={visibleGrid[cnt]} onMouseEnter={setBorder} onMouseLeave={unSetBorder} onClick={setGame}>{cnt}</Button>);
            cnt++;
        }
        gameGrid.push(tempGrid);
    }

  return (
    <div className="Game">
      <header className="Game-header">
        <Box className='Game-login' sx={{ bgcolor: '#282c34' }}>
        <h2 style={{color:"#ffffff"}}>Make Your Move <i><strong style={{color:"#fac564"}}>WISELY</strong></i></h2>
            {gameGrid.map((row,index)=> 
                {
                    return (
                        <div>
                            {
                                row.map((key,sIndex) => <div style={{display:"inline"}}>{key}</div>)
                            }
                        </div>
            )})}
            <Button variant="contained" color="success" style={{marginRight:"10%",marginTop:"5%"}} onClick={()=>{history.push('/entry');window.location.reload(false)}}>RESTART</Button>
            <Button variant="contained" color="secondary" style={{marginLeft:"10%",marginTop:"5%"}} onClick={()=>{history.push('/rules');window.location.reload(false)}}>RULES</Button>
        </Box>
      </header>
    </div>
  );
}

export default Game;
