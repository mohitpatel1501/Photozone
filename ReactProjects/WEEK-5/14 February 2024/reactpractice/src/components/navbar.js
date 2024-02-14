import { Link } from "react-router-dom";
import '../style.css';

export default function Navbar(){
    return(
        <div className="navbar">
        <Link to="/" >HOME</Link> |
        <Link to="/about">ABOUT</Link> |
        <Link to="/services" >SERVICES</Link> |
        <Link to="/contact" >CONTACT</Link>
        </div>
    );
}