import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function AppRoutes() {
    return(
        <Routes>
            {/* <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/> */}
        </Routes>
    );
}

export default AppRoutes;