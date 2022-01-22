import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Index, Dashboard, Meeting} from "./pages";
import "./theme/theme.scss";

function App() {
    return (
        <div className={"box"}>
            <div className={"container"}>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/meeting" element={<Meeting/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
