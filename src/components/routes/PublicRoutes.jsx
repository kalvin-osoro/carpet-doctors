import { Routes, Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Prices from "../pages/Prices";
import SignUp from "../pages/SignUp";

// import { Navbar } from "../Navbar";


const PublicRoutes = () => {
    return (
        
        <Routes>
          
            <Route path="/" element={ < Home />}/>
            <Route path="/products" element={ < Products /> } />
            <Route path="/services" element={ <Services /> } />
            <Route path="/prices" element={ <Prices /> } />

            <Route path="/sign-up" element={ <SignUp /> } />            
        </Routes>
    )
}

export default PublicRoutes