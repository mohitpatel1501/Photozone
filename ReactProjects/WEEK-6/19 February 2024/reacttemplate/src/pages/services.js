export default function Services() {

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
                        <h2 className="title">Our Services</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li className="mx-2">/ </li>
                            <li className="active"> Services </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="services">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h3 className="title-big text-center mb-5"> What you will have</h3>
                    <div className="row">
                        <div className="col-lg-6 align-self pr-lg-4">
                            <div className="progress-info info1">
                                <h6 className="progress-tittle">Figma illustrations <span className="">80%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "80%"}}
                                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info2">
                                <h6 className="progress-tittle">PHP programming <span className="">95%</span>
                                </h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "95%"}}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info3">
                                <h6 className="progress-tittle">Web design & development <span className="">90%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "90%"}}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info4">
                                <h6 className="progress-tittle">Adobe Photoshop <span className="">75%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "75%"}}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info2 mb-0">
                                <h6 className="progress-tittle">Wordpress design <span className="">95%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "95%"}}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
                            <h3 className="title-left"> Our Skills - We are qualified and of experienced with a lot of skills</h3>
                            <p className="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet
                                elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                                dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                            <p className="mt-3">Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem init ipsum dolor sit amet elit. Dolor ipsum non velit,
                                culpa! Pellen tesque libero ut justo, ultrices in ligula amet dolor sit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w3l-servicesblock2" id="why">
                <section id="grids5-block" className="py-5">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <h3 className="title-big text-center">Why Choose us</h3>
                        <div className="row mt-lg-5 mt-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="grids5-info">
                                    <a href="#service" className="d-block zoom"><img src="assets/images/service1.jpg" alt=""
                                        className="img-fluid service-image" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#service">We believe in Quality</a></h4>
                                        <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div className="grids5-info">
                                    <a href="#service" className="d-block zoom"><img src="assets/images/service2.jpg" alt=""
                                        className="img-fluid service-image" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#service">We stand for uniqueness</a></h4>
                                        <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div className="grids5-info">
                                    <a href="#service" className="d-block zoom"><img src="assets/images/service3.jpg" alt=""
                                        className="img-fluid service-image" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#service">We respect Deadlines</a></h4>
                                        <p className="mt-sm-3 mt-2">Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="w3l-servicesblock1 py-5" id="moreservices">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h3 className="title-big text-center">Hand-Crafted services</h3>
                    <div className="grids-area-hny main-cont-wthree-fea row mt-lg-5 mt-4 pb-lg-0 pb-2">
                        <div className="col-lg-4 col-md-6 grids-feature">
                            <div className="area-box">
                                <span className="fa fa-retweet mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">Social Media Strategy</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div className="area-box">
                                <span className="fa fa-clock-o mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">Branding Strategy</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div className="area-box">
                                <span className="fa fa-line-chart mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">UI/UX Design</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div className="area-box">
                                <span className="fa fa-trash-o mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">Digital Product Strategy</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div className="area-box">
                                <span className="fa fa-video-camera mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">Web Hosting Service</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                            <div className="area-box">
                                <span className="fa fa-search-plus mt-0"></span>
                                <div className="area-box-info">
                                    <h4><a href="#feature" className="title-head">SEO Services</a></h4>
                                    <p className="mt-sm-3 mt-2">A ligula quam et libero justo,  in. Ut eu leo non. Duis
                                        sed et dolor sit amet.</p>
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