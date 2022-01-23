import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Index, Dashboard, Meeting, notFound} from "./pages";
import "./theme/theme.scss";

function App() {
    return (
        <div className={"box"}>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/room/:id" element={<Meeting/>}/>
                {/*<Route element={<notFound/>}/>*/}
            </Routes>
        </div>

    )
}

export default App;
