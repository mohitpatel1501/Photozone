import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <Link to="/" >HOME</Link>  |
        <Link to="/about">ABOUT</Link>  |
        <Link to="/services" >SERVICES</Link>  |
        <Link to="/contact" >CONTACT</Link>  |
        </>
    );
}