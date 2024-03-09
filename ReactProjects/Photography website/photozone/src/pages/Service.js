import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import BacktoTop from '../common/BacktoTop';
import { Link } from 'react-router-dom';

export default function Servicepage() {
    return (
        <div>
            <Navbar />
            <Servicebreadcrumb />
            <Services />
            <Footer />
            <BacktoTop />
            <Copyright />
        </div>
    );
}

export function Servicebreadcrumb() {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Our Services</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Services</li>
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

export function Services() {
    return (
        <>
            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "maxWidth": "500px"  }}>
                        <p className="text-primary text-uppercase mb-2">Our Services</p>
                        <h1 className="display-6 mb-4">We Provide Best Professional Services</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Weddings</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Portraits</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Fashion</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                    <div className="service-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-link text-primary"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h4>Editorial</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}