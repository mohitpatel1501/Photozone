export default function Footer(){

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

    return(
        <>
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