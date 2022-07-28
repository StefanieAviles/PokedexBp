import React from 'react';
import './App.css';
import { Home } from './pages/Home'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Routes>
        <Route path="/" element={<Home navigateFunction={navigate} locationFunction={location}/>} />
    </Routes>
  );
}

export default App;
