import React from 'react';
import Menu from '../Common/Menu';
import Slider from '../Common/Slider';
import Footer from '../Common/Footer';

export default function Home() {
    return (
        <>
            <h3>Home Page</h3>
            <Menu />
            <Slider />
            <div class="contentbox">
                <h1>Content Box</h1>
            </div>
            <Footer />
            <br />
        </>
    );
}
