import React from 'react';
import Menu from '../Common/Menu';
import Slider from '../Common/Slider';
import Footer from '../Common/Footer';

export default function Contactus() {
    return (
        <>
            <h3>Contact Us Page</h3>
            <Menu />
            <Slider />
            <div class="mapbox">
                <h1>Google Map Box</h1>
            </div>
            <div class="contactbox">
                <h1>Contact Us Box</h1>
            </div>
            <Footer />
        </>
    );
}
