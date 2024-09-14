import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import AddUser from "./pages/addUser";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
