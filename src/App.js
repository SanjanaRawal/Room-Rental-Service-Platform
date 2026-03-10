import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import "./style.css";
import RoomDetails from "./pages/RoomDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
return(
<Router>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/room/:id" element={<RoomDetails/>} />
</Routes>
</Router>
)
}

export default App
