import React  from "react";
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import history from '../../src/history/history';
import authContext from '../context/auth-context';

import Home from "../components/admin/App"
import Entry from '../components/entryPass/entryPass';
import Rules from '../components/rules/rules';
import Game from '../components/game/game';


function RRoutes () 
{
    var idUser = null;
    var win = null;

    const login = (userId, wins) => {
        idUser=userId;
        win=wins;
        sessionStorage.setItem("username", JSON.stringify(idUser));
        sessionStorage.setItem("passed", JSON.stringify(win));
        sessionStorage.setItem("row", JSON.stringify(3));
        sessionStorage.setItem("col", JSON.stringify(4));
    };
        return(
            <div>
                <Router history={history}>
                    <authContext.Provider value={{wins: win, userId: idUser, login: login}}>
                        <Routes>
                            {/* <Redirect from="/" to="/home" exact /> */}
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="/entry" element={<Entry/>}/>
                            <Route path="/rules" element={<Rules/>}/>
                            <Route path="/game" element={<Game/>}/>
                        </Routes>
                    </authContext.Provider>
                </Router>
            </div>
        );
}

export default RRoutes;