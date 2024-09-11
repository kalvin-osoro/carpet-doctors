import { Children } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = () => {

    return (
        <>
        <Navbar />    
        {Children}  

        <Footer />  

        </>
    );
}

export default Layout