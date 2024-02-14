import Navbar from "./navbar";
import '../style.css';

export default function Home(){
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
        <div className="sliderbox">
            <h1>Slider Box</h1>
        </div>
        <div className="contentbox">
            <h1>Content Box</h1>
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