import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import WrongNetwork from "./pages/Wrong Network/Wrong_network";
import FakeBayc1 from "./pages/FakeBayc/FakeBayc1";
import FakeBaycTokenId1 from "./pages/FakeBayc/TokenId/FakeBaycTokenId1";
import FakeNefturians from "./pages/FakeNefturians/FakeNefturians";
import FakeNefturiansUserAddress from "./pages/FakeNefturians/FakeNefturianUserAddress/FakeNefturiansUserAddress";
import FakeMeebits from "./pages/FakeMeebits/FakeMeebits";

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/fakebayc" element={<FakeBayc1/>}/>
            <Route path="/fakebayc/:id" element={<FakeBaycTokenId1/>}/>
            <Route path="/fakenefturians" element={<FakeNefturians/>}/>
            <Route path="/fakenefturians/:address" element={<FakeNefturiansUserAddress/>}/>
            <Route path="/fakemeebits" element={<FakeMeebits/>}/>
            <Route path="/wrong-network" element={<WrongNetwork/>}/>
        </Routes>
    );
}

export default AppRoutes;

