import React from 'react';
import Menu from '../Common/Menu';
import Slider from '../Common/Slider';
import Footer from '../Common/Footer';

export default function About() {
    return (
        <>
            <h3>About Page</h3>
            <Menu />
            <Slider />
            <div class="about-industry">
                <h1>About Industry Box</h1>
            </div>
            <div class="about-benefits">
                <h1>About Benefits Box</h1>
            </div>
            <Footer />
            <br />
        </>
    );
}
