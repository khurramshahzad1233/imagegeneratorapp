import React,{useEffect} from 'react';
import "./App.css";
import {Routes,Route,BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Home from './components/home/Home';
// import { Configuration, OpenAIApi } from "openai";


const App = () => {

  useEffect(()=>{

    WebFont.load({google:{
      families:["Roboto","Montserrat","Droid Sans","Chilanka","Satisfy"]
    }})
  },[])
  return (
    <Router>

      <Routes>

        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;