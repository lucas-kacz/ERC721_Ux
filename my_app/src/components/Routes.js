import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import WrongNetwork from "./pages/Wrong Network/Wrong_network";
import FakeBayc from "./pages/FakeBayc/FakeBayc";


function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/fakebayc" element={<FakeBayc/>}/>
            <Route path="/wrong-network" element={<WrongNetwork/>}/>
        </Routes>
    );
}

export default AppRoutes;

