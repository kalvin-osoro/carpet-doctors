import Footer from "../Footer";
import Navbar from "./Navbar"
// import Footer from "./Footers";

const Layout = ({ children }) => {

    return (
        <>
        <Navbar />    
        {children}  

        <Footer />  

        </>
    );
};
export default Layout