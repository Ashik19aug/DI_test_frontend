import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Registration, Teams} from "./pages/index.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/teams" element={<Teams />} />
            </Routes>
        </Router>
    );
}

export default App;

