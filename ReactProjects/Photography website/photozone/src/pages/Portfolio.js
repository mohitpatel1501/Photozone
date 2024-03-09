import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import BacktoTop from '../common/BacktoTop';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <div>
            <Navbar />
            <Projectbreadcrumb />
            <Projects />
            <Footer />
            <BacktoTop />
            <Copyright />
        </div>
    );
}

export function Projectbreadcrumb() {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Our Projects</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
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

export function Projects() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "maxWidth": "500px"  }}>
                        <p className="text-primary text-uppercase mb-2">Our Works</p>
                        <h1 className="display-6 mb-0">Discover Our Unique And Creative Photoshoot</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-5.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-5.jpg" data-lightbox="project">
                                            Memory
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-1.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-1.jpg" data-lightbox="project">
                                            Wedding
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-2.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-2.jpg" data-lightbox="project">
                                            Portrait
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-6.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-6.jpg" data-lightbox="project">
                                            Travel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-7.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-7.jpg" data-lightbox="project">
                                            Wedding
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-3.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-3.jpg" data-lightbox="project">
                                            Memory
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-4.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-4.jpg" data-lightbox="project">
                                            Fashion
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="project-item">
                                        <img className="img-fluid" src="img/project-8.jpg" alt="" />
                                        <a className="project-title h5 mb-0" href="img/project-8.jpg" data-lightbox="project">
                                            Portrait
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}