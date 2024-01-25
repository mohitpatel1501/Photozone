import React from 'react';
import Menu from '../Common/Menu';
import Slider from '../Common/Slider';
import Footer from '../Common/Footer';

export default function Products() {
    return (
        <>
            <h3>Products Page</h3>
            <Menu />
            <Slider />
            <div class="productsbox">
                <h1>Products Box</h1>
            </div>
            <div class="testinomialbox">
                <h1>Testinomial Box</h1>
            </div>
            <Footer />
            <br />
        </>
    );
}
