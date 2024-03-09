import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import BacktoTop from '../common/BacktoTop';
import { Link } from 'react-router-dom';

export default function TeamPage() {
    return (
        <div>
            <Navbar />
            <Teambreadcrumb />
            <Team />
            <Footer />
            <BacktoTop />
            <Copyright />
        </div>
    );
}

export function Teambreadcrumb() {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Our Team</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Team</li>
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

export function Team() {
    return (
        <>
            <div className="container-xxl px-0 py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "maxWidth": "500px"  }}>
                    <p className="text-primary text-uppercase mb-2">Our Team</p>
                    <h1 className="display-6 mb-0">Creative Photograher And Videographer</h1>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 flex-sm-row">
                            <div className="col-sm-6">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                                    <div className="mb-3">
                                        <h4>Lucifer Jhones</h4>
                                        <span>Photographer</span>
                                    </div>
                                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo</p>
                                    <div className="d-flex">
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row g-0 flex-sm-row-reverse flex-lg-row">
                            <div className="col-sm-6">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                                    <div className="mb-3">
                                        <h4>Jesse Joslin</h4>
                                        <span>Videographer</span>
                                    </div>
                                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo</p>
                                    <div className="d-flex">
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 flex-lg-row-reverse">
                            <div className="col-sm-6">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                                    <div className="mb-3">
                                        <h4>Richard Archer</h4>
                                        <span>Retoucher</span>
                                    </div>
                                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo</p>
                                    <div className="d-flex">
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row g-0 flex-sm-row-reverse">
                            <div className="col-sm-6">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                                    <div className="mb-3">
                                        <h4>April Ryan</h4>
                                        <span>Editor</span>
                                    </div>
                                    <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo</p>
                                    <div className="d-flex">
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
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
