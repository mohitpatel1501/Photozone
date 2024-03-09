import React from 'react';
import Spinner from '../common/Spinner';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import {About} from './About';
import BacktoTop from '../common/BacktoTop';
import { Services } from './Service';
import { Projects } from './Portfolio';
import { Facts } from './Whychooseus';
import { Team } from './Team';
import { Testimonial } from './Clientreviews';
import Copyright from '../common/Copyright';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            {/* <Spinner /> */}
            <Navbar />
            <Header />
            <VideoModal />
            <About />
            <Facts />
            <Services />
            <Projects />
            <Team />
            <Testimonial />
            <Footer />
            <BacktoTop />
            <Copyright />
        </div>
    );
}

export function Header() {
    return (
        <>
        <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <p className="text-primary text-uppercase mb-2 animated slideInDown">Welcome To Photozone</p>
                    <h1 className="display-4 mb-3 animated slideInDown">Wedding And Portrait Studio Based in New York</h1>
                    <p className="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="d-flex align-items-center pt-4 animated slideInDown">
                        <Link to="/about" className="btn btn-primary py-3 px-4 me-5">Explore More</Link>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
                <div className="col-lg-6 animated fadeIn">
                    <div className="row g-3">
                        <div className="col-6 text-end">
                            <img className="img-fluid bg-white p-3 w-100 mb-3" src="img/hero-1.jpg" alt="" />
                            <img className="img-fluid bg-white p-3 w-50" src="img/hero-3.jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <img className="img-fluid bg-white p-3 w-50 mb-3" src="img/hero-4.jpg" alt="" />
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

export function VideoModal(){
    return(
        <>
        <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   
                    <div className="ratio ratio-16x9">
                        <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                            allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
 