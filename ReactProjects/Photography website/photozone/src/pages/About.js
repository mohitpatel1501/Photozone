import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import BacktoTop from '../common/BacktoTop';
import { Link } from 'react-router-dom';

export default function Aboutpage() {
    return (
        <div>
            <Navbar />
            <Aboutbreadcrumb />
            <About />
            <Footer />
            <BacktoTop />
            <Copyright />
        </div>
    );
}

export function Aboutbreadcrumb() {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid bg-white p-3 w-100" src="img/hero-1.jpg" alt="" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid bg-white p-3 w-100" src="img/hero-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function About() {
    return (
        <div >
            <div className="container-xxl py-5" id="aboutus">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-3 img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid bg-light p-3" src="img/about-1.jpg" alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid bg-light p-3" src="img/about-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-primary text-uppercase mb-2">About Us</p>
                                <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Quality Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Custom Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Online Order
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-3"></i>Home Delivery
                                    </div>
                                </div>
                                <Link className="btn btn-primary py-3 px-5" to="/about">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
