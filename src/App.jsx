import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Registration} from "./pages/index.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </Router>
    );
}

export default App;

