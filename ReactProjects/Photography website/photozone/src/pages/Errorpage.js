import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Copyright from '../common/Copyright';
import BacktoTop from '../common/BacktoTop';
import { Link } from 'react-router-dom';

export default function Errorpage() {
    return (
        <>
            <Navbar />
            <Errorbreadcrumb />
            <Error404 />
            <Footer />
            <BacktoTop />
            <Copyright />
        </>
    );
}

export function Errorbreadcrumb() {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Error Page</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Error Page</li>
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

export function Error404() {
    return (
        <div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary py-3 px-5" to="/">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
