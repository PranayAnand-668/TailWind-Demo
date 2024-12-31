import './App.css'
import Register from './components/register'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Welcome from './components/Welcome';

function App() {
 
  return (
    <Router >
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
