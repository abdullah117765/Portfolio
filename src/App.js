import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,     //npm install react-router-dom
} from "react-router-dom"; 

import React from 'react';
import Home from "./pages/home/Home.jsx"
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>   
      
        <Route path="/" element={<Home/>}/>
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

