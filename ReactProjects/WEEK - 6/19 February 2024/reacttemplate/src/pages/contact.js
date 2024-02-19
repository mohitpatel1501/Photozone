export default function Contact() {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark stroke">
                        <h1><a className="navbar-brand" href="index.html">
                            Web service
                        </a></h1>
                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mr-5">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item @@about__active">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item @@services__active">
                                    <a className="nav-link" href="services.html">Services</a>
                                </li>
                                <li className="nav-item @@contact__active">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                                <nav className="ml-lg-3">
                                    <div className="search-bar">
                                        <form action="#" method="GET" className="search">
                                            <input type="search" className="search__input" name="search"
                                                placeholder="Search here.." onload="equalWidth()" autoComplete="off" required />
                                            <span className="fa fa-search search__icon"></span>
                                        </form>
                                    </div>
                                </nav>
                            </ul>
                        </div>

                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container py-1">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </header >
            <section className="w3l-about-breadcrumb">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
                    <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
                        <h2 className="title">Get in touch</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li className="mx-2">/ </li>
                            <li className="active"> Contact </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-contact-7 pt-5" id="contact">
                <div className="contacts-9 pt-lg-5 pt-md-4">
                    <div className="container">
                        <div className="top-map">
                            <div className="row map-content-9">
                                <div className="col-lg-8">
                                    <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
                                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="text-right">
                                        <div className="form-grid">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Name*" required="" />
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required="" />
                                            <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone number*"
                                                required="" />
                                            <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" />
                                        </div>
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Message"></textarea>
                                        <button type="submit" className="btn btn-primary btn-style mt-3">Submit</button>
                                    </form>
                                </div>
                                <div className="col-lg-4 cont-details">
                                    <address>
                                        <h5 className="">Our Office Address</h5>
                                        <p><span className="fa fa-map-marker"></span>Style web design studio, 208 Trainer Avenue street,
                                            Corner Market, NY - 62617 </p>
                                        <p><span className="fa fa-phone"></span><a href="tel:+1(12) 366 411 4999"> +1(12) 366 411
                                            4999</a></p>
                                        <p> <a href="mailto:mail@example.com"><span
                                            className="fa fa-envelope"></span>mail@example.com</a></p>
                                        <p> <a href="mailto:support@example.com"><span
                                            className="fa fa-support"></span>support@example.com</a></p>

                                        <h5 className="mt-4 mb-3">Follow us on social media</h5>
                                        <div className="main-social-footer-29">
                                            <a href="#facebook" className="facebook"><span className="fa fa-facebook m-0"></span></a>
                                            <a href="#twitter" className="twitter"><span className="fa fa-twitter m-0"></span></a>
                                            <a href="#instagram" className="instagram"><span className="fa fa-instagram m-0"></span></a>
                                            <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin m-0"></span></a>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map mt-5">
                        <iframe title="gmap"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                            frameborder="0" style={{"border":"0"}} allowfullscreen=""></iframe>
                    </div>
                </div>
            </section>
            <section className="w3l-footer-29-main">
                <div className="footer-29 py-5">
                    <div className="container py-lg-4">
                        <div className="row footer-top-29">
                            <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                                <div className="footer-logo mb-4">
                                    <a className="navbar-brand" href="index.html">
                                        Web service</a>
                                </div>
                                <p>We are real pros at digital and web design. We work for our clients to provide them with the best service
                                    and products. We value every project as we get invaluable experience.</p>
                                <div className="main-social-footer-29 mt-4">
                                    <a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a>
                                    <a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a>
                                    <a href="#instagram" className="instagram"><span className="fa fa-instagram"></span></a>
                                    <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                                <ul>
                                    <h6 className="footer-title-29">Useful Links</h6>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#blog"> Blog posts</a></li>
                                    <li><a href="#pricing"> Pricing plans</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 className="footer-title-29">Resources</h6>
                                <ul>
                                    <li><a href="#traning">Training</a></li>
                                    <li><a href="#marketplace">Marketplace</a></li>
                                    <li><a href="#experts">Our Experts</a></li>
                                    <li><a href="#platform">Platform</a></li>
                                    <li><a href="#customers"> Customers</a></li>
                                </ul>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 className="footer-title-29">Instagram posts</h6>
                                <div className="post1">
                                    <a href="#url" className="post-title">Practice Safe Design. Always Use...</a>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                                <div className="post1 mt-4">
                                    <a href="#url" className="post-title">How to Start when You... </a>
                                    <p>We work for our clients to provide them with the best service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="w3l-copyright text-center">
                    <div className="container">
                        <p className="copy-footer-29">© 2020 Web Service. All rights reserved. Design by <a href="https://w3layouts.com/"
                            target="_blank" rel="noopener noreferrer">
                            W3layouts</a></p>
                    </div>

                    <button onClick={topFunction} id="movetop" title="Go to top">
                        &#10548;
                    </button>

                </section>
            </section>
        </>
    );
}