import React from 'react';
import './App.css';
import Maintop from './Maintop.js';
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
// import Next from './Next';
import Home from './Home.js'
import Skills from './Skills.js';
import Education from './Education/Education.js';
import Mylife from './mylife/Mylife';

function App() {
  return (
    <div className="App">
        <div className="app_body">
          <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<><Home/><Skills/><Education/><Mylife/></>}/>
        </Routes>
          <Routes>
            <Route path="/" element={<Maintop/>}/>
        </Routes>
        </BrowserRouter>  
       </div>
    </div>
  );
}

export default App;
