export default function About() {

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
                        <h2 className="title">About Us</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li className="mx-2">/ </li>
                            <li className="active"> About Us </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-aboutblock1" id="about">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3 py-2">
                        <div className="row">
                            <div className="col-lg-6 mb-lg-0 mb-md-5 mb-5 align-self">
                                <h3 className="title-big mx-0">About our Web Studio </h3>
                                <p className="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
                                    elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                                    dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                                <p className="mt-3">Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at. Lorem init ipsum dolor sit amet elit. Dolor ipsum non velit,
                                    culpa! Pellen tesque libero ut justo, ultrices in ligula amet dolor sit.</p>
                                <a href="#about" className="btn btn-primary btn-style mt-md-5 mt-4">Read More</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <img src="assets/images/about.jpg" alt="" className="radius-image-full img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-aboutblock2" id="stats">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3 py-2">
                        <div className="row">
                            <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4 align-self">
                                <h3 className="title-left mx-0">We create simple, effective strategies that connect with people across
                                    every channel by putting the customer at the center </h3>
                                <p className="pt-lg-2 mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
                                    elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                                    dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                                <p className="mt-3">Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at. Lorem init ipsum dolor sit amet elit. Dolor ipsum non velit,
                                    culpa! Pellen tesque libero ut justo, ultrices in ligula amet dolor sit.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <div className="progress-circles">
                                        <div className="circle1">
                                            <div id="progress" data-dimension="200" data-text="65%" data-fontsize="36"
                                                data-percent="65" data-fgcolor="#30B455" data-bgcolor="#eee" data-width="15"
                                                data-bordersize="5" data-animationstep="2"></div>
                                            <h4>Completed projects</h4>
                                        </div>
                                        <div className="circle1">
                                            <div id="progress1" data-dimension="200" data-text="75%" data-fontsize="36"
                                                data-percent="75" data-fgcolor="#30B455" data-bgcolor="#eee" data-width="15"
                                                data-bordersize="5" data-animationstep="2"></div>
                                            <h4>Happy Clients</h4>
                                        </div>
                                        <div className="circle1">
                                            <div id="progress2" data-dimension="200" data-text="90%" data-fontsize="36"
                                                data-percent="90" data-fgcolor="#30B455" data-bgcolor="#eee" data-width="15"
                                                data-bordersize="5" data-animationstep="2"></div>
                                            <h4>Award winning design</h4>
                                        </div>
                                        <div className="circle1">
                                            <div id="progress3" data-dimension="200" data-text="80%" data-fontsize="36"
                                                data-percent="80" data-fgcolor="#30B455" data-bgcolor="#eee" data-width="15"
                                                data-bordersize="5" data-animationstep="2"></div>
                                            <h4>24/7 support</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-team py-5" id="team">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h3 className="title-big text-center mx-0 mb-lg-5 mb-4">Meet the Team </h3>
                    <div className="row team-row">
                        <div className="col-lg-4 col-sm-6 team-wrap">
                            <div className="team-member text-center">
                                <div className="team-img">
                                    <img src="assets/images/team1.png" alt="" className="img-fluid radius-image" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>
                                                Our web design team will spend time with our digital marketing team.
                                            </p>
                                            <div className="socials mt-4">
                                                <a href="#facebook"><i className="fa fa-facebook"></i></a>
                                                <a href="#twitter"><i className="fa fa-twitter"></i></a>
                                                <a href="#google"><i className="fa fa-google-plus"></i></a>
                                                <a href="#gmail"><i className="fa fa-envelope"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#team"><h6 className="team-title">John Marshall</h6></a>
                                <p>Designer</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 team-wrap mt-sm-0 mt-5">
                            <div className="team-member text-center">
                                <div className="team-img">
                                    <img src="assets/images/team2.png" alt="" className="img-fluid radius-image" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>
                                                Our web design team will spend time with our digital marketing team.
                                            </p>
                                            <div className="socials mt-4">
                                                <a href="#facebook"><i className="fa fa-facebook"></i></a>
                                                <a href="#twitter"><i className="fa fa-twitter"></i></a>
                                                <a href="#google"><i className="fa fa-google-plus"></i></a>
                                                <a href="#gmail"><i className="fa fa-envelope"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#team"><h6 className="team-title">Steve Roberts</h6></a>
                                <p>Photographer</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
                            <div className="team-member last text-center">
                                <div className="team-img">
                                    <img src="assets/images/team3.png" alt="" className="img-fluid radius-image" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>
                                                Our web design team will spend time with our digital marketing team.
                                            </p>
                                            <div className="socials mt-4">
                                                <a href="#facebook"><i className="fa fa-facebook"></i></a>
                                                <a href="#twitter"><i className="fa fa-twitter"></i></a>
                                                <a href="#google"><i className="fa fa-google-plus"></i></a>
                                                <a href="#gmail"><i className="fa fa-envelope"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#team"><h6 className="team-title">Michael Cartney</h6></a>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-clients py-5" id="clients">
                <div className="call-w3 py-lg-5 py-md-4 py-2">
                    <div className="container">
                        <h3 className="title-big text-center">Our Clients</h3>
                        <div className="company-logos text-center mt-sm-5 mt-4">
                            <div className="row logos">
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand1.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand2.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4">
                                    <img src="assets/images/brand3.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                                    <img src="assets/images/brand4.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src="assets/images/brand5.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src="assets/images/brand6.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand3.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand6.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand5.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand1.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand2.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-2 col-md-3 col-4 mt-4">
                                    <img src="assets/images/brand4.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
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