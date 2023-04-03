import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
function Main (){
    return(
        <div>

            <Router>
                <Routes>
                    <Route  path="/"  element={<PageOne/>}/>
                    <Route path="/dashborad" element={<PageTwo/>}/>
                </Routes>
            </Router>
            
        </div>
    )
}

export default Main;