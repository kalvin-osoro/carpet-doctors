import { Routes, Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import Home from "../pages/Home";

// import { Navbar } from "../Navbar";


const PublicRoutes = () => {
    return (
        
        <Routes>
          
            <Route path="/" element={ < Home />}/>
            <Route path="/footer" element = { < Footer />} />
        </Routes>
    )
}

export default PublicRoutes