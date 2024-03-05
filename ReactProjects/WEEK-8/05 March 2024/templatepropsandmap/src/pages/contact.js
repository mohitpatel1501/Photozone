import Footer from "../common/footer";
import Header from "../common/header";

export default function Contact(){
    return(
        <>
        <Header />
        <Contactbreadcrumb />
        <Contactaddress />
        <Footer />
        </>
    );
}

function Contactbreadcrumb(){
    return(
        <>
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
        </>
    );
}
function Contactaddress(){
    return(
        <>
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
        </>
    );
}

export {Contactbreadcrumb, Contactaddress};