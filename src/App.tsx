import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Index, Dashboard, Meeting} from "./pages"
function App() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meeting" element={<Meeting />} />
        </Routes>
    )
}

export default App;
