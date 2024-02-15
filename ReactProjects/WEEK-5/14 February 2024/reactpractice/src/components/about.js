import Navbar from "./navbar";
import '../style.css';

export default function About(){
    return(
        <>
        <Navbar />
        <div className="container">
        <div className="menubox">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="menuitems">
                <h1>MENU ITEMS</h1>
            </div>
        </div>
        <div className="about-industry">
            <h1>About Industry Box</h1>
        </div>
        <div className="about-benefits">
            <h1>About Benefits Box</h1>
        </div>
        <div className="footer">
            <div className="footer-left">
                <h2>Address</h2>
            </div>
            <div className="footer-middle">
                <h2>Links to other pages</h2>
            </div>
            <div className="footer-right">
                <h2>Email and Mobile No.</h2>
            </div>
        </div>
    </div>
        </>
    );
}