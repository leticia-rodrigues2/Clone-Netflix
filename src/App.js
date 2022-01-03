import React, { useEffect,useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Contas from "./pages/contas";

export default () =>{
return ( 
  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contas" element={<Contas/>}/>
      </Routes>
  </Router>
  // <Home></Home>

);
}
