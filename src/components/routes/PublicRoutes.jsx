import { Routes, Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

// import { Navbar } from "../Navbar";


const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ < Navbar />}/>
            <Route path="/footer" element = { < Footer />} />
        </Routes>
    )
}

export default PublicRoutes