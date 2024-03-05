import Footer from "../common/footer";
import Header from "../common/header";

export default function Home() {

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    return (
        <>
            <Header />
            <Homebanner />
            <Homeinfogrids />
            <Homegallery />
            <Homeserviceblock1 />
            <Homeserviceblock />
            <Homenews />
            <Hometestinomials />
            <Homefaq />
            <Homebottomnewsletter />
            <Footer />
        </>
    );
}
function Homebanner() {
    return (
        <>
            <section id="home" className="w3l-banner py-5">
                <div className="container py-lg-5 mt-lg-5">
                    <div className="py-lg-4 my-2">
                        <div className="banner-info-grid mt-lg-5">
                            <h3 className="mb-4">Stylish Creative Designs.</h3>
                            <section id="bottom" className="demo">
                                <a href="#bottom"><span></span>Scroll</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// *****************************************************************************************

var homeinfogrids = [{ "title": "01. Video productions", "title-head": "Stunning video sequence and impressing ideas are all here.", "title-para": "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet." }, { "title": "02. Branding Design", "title-head": "Great reflection of your brand be achieved by top designers.", "title-para": "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet." }, { "title": "03. Graphic Design", "title-head": "Creating gorgeous graphic design meeting clients needs.", "title-para": "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet." },];

function Homeinfogrids() {
    return (
        <>
            <section className="w3l-bottom-grids-6 py-5" id="bottom">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="grids-area-hny main-cont-wthree-fea row">
                        {
                            homeinfogrids.map(
                                (a, i) => {
                                    return <Homeinfogridsprops title={homeinfogrids[i]["title"]} thead={homeinfogrids[i]["title-head"]} para={homeinfogrids[i]["title-para"]} />
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
function Homeinfogridsprops(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 grids-feature">
                <div className="area-box">
                    <span className="title-small mb-2">{props.title}</span>
                    <h4><a href="#feature" className="title-head">{props.thead}</a></h4>
                    <p className="">{props.para}</p>
                </div>
            </div>
        </>
    );
}

// *******************************************************************************

var gallerydata = [{ "image": "p1.jpg", "img-title": "UI experience", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p2.jpg", "img-title": "Wordpress", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p3.jpg", "img-title": "E-commerce", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p4.jpg", "img-title": "Headphones", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p5.jpg", "img-title": "Mobile app", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p6.jpg", "img-title": "Modern Ideas", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p7.jpg", "img-title": "Fashion design", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." }, { "image": "p8.jpg", "img-title": "Creativity", "gallerypara": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia." },];

function Homegallery() {
    return (
        <>
            <section className="w3l-portfolio-8 py-5">
                <div className="portfolio-main py-lg-5 py-md-4 py-2">
                    <div className="container">
                        <div className="row galler-top">
                            {
                                gallerydata.map(
                                    (a, i) => {
                                        return <Homegalleryprops img={gallerydata[i]["image"]} title={gallerydata[i]["img-title"]} para={gallerydata[i]["gallerypara"]} />
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Homegalleryprops(props) {
    return (
        <>
            <div className="col-lg-3 col-sm-6 protfolio-item hover14">
                <figure>
                    <img src={"assets/images/" + props.img} alt="product" className="img-fluid" />
                    <div className="img-info">
                        <a href="#url" className="img-title">{props.title}</a>
                        <p>{props.para}</p>
                    </div>
                </figure>
            </div>
        </>
    );
}

// *****************************************************************************

var homeserviceblockdata = [{ "icon": "fa fa-retweet", "title-head": "Social Media Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-clock-o", "title-head": "Branding Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-line-chart", "title-head": "UI/UX Design", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-trash-o", "title-head": "Digital Product Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-video-camera", "title-head": "Web Hosting Service", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-search-plus", "title-head": "SEO Services", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." },];

function Homeserviceblock1() {
    return (
        <>
            <section className="w3l-servicesblock1 py-5" id="moreservices">
                <div className="container py-lg-5 py-md-4 py-3">
                    <div className="grids-area-hny main-cont-wthree-fea row ">

                        {
                            homeserviceblockdata.map(
                                (a, i) => {
                                    return <Homeserviceblock1props icon={homeserviceblockdata[i]["icon"]} title={homeserviceblockdata[i]["title-head"]} para={homeserviceblockdata[i]["para"]} />
                                }
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

function Homeserviceblock1props(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 grids-feature mt-5 pt-lg-4">
                <div className="area-box">
                    <span className={props.icon + " mt-0"}></span>
                    <div className="area-box-info">
                        <h4><a href="#feature" className="title-head">{props.title}</a></h4>
                        <p className="mt-lg-3 mt-2">{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

// **************************************************************************************

function Homeserviceblock() {
    return (
        <>
            <section className="w3l-servicesblock py-5" id="services">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="row">
                        <div className="col-lg-6 about-right-faq align-self">
                            <h3 className="title-big"> Importance of Skills</h3>
                            <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae, ad.</p>
                            <div className="progress-info info1">
                                <h6 className="progress-tittle">Figma illustrations <span className="">80%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ 'width': '80%' }}
                                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info2">
                                <h6 className="progress-tittle">PHP programming <span className="">95%</span>
                                </h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "95%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info3">
                                <h6 className="progress-tittle">Web design & development <span className="">90%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "90%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info info4 mb-0">
                                <h6 className="progress-tittle">Adobe Photoshop <span className="">75%</span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "75%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 left-wthree-img mt-lg-0 mt-5">
                            <img src="assets/images/progress.jpg" alt="" className="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// ******************************************************************************************

var homenewsdata=[{"image":"blog1.jpg","blog-title":"Best free Web templates","date":"September 17, 2020","para":"Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!"},{"image":"blog2.jpg","blog-title":"Skills to become a Designer","date":"September 17, 2020","para":"Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!"},{"image":"blog3.jpg","blog-title":"How to make 404 error page?","date":"September 17, 2020","para":"Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!"},];

function Homenews() {
    return (
        <>
            <div className="w3l-news" id="news">
                <section id="grids5-block" className="py-5">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <h3 className="title-big text-center">See what’s going on</h3>
                        <div className="row mt-lg-5 mt-4">
                            
                            {
                                homenewsdata.map(
                                    (a,i)=>{
                                        return <Homenewsprops img={homenewsdata[i]["image"]} title={homenewsdata[i]["blog-title"]} date={homenewsdata[i]["date"]} para={homenewsdata[i]["para"]} />
                                    }
                                )
                            }
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function Homenewsprops(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
                <div className="grids5-info">
                    <a href="#blog-single" className="d-block zoom"><img src={"assets/images/"+props.img} alt="" className="img-fluid news-image" /></a>
                    <div className="blog-info">
                        <h4><a href="#blog-single">{props.title}</a></h4>
                        <p className="date"><span className="fa fa-calendar mr-2"></span> {props.date}</p>
                        <p>{props.para}</p>
                        <a href="#blog-single" className="btn btn-news mt-4">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

function Hometestinomials() {
    return (
        <>
            <section className="w3l-testimonials" id="testimonials">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-4">
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p className="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p className="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p className="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p className="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p className="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p className="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
function Homefaq() {
    return (
        <>
            <div className="w3l-faq-block py-5" id="faq">
                <div className="container py-lg-5">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-5">
                            <div className="accordion">
                                <div className="accordion-item">
                                    <button id="accordion-button-1" aria-expanded="true"><span className="accordion-title">How much does
                                        a static website cost?</span><span className="icon" aria-hidden="true"></span></button>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">How to
                                        choose a best web template?</span><span className="icon" aria-hidden="true"></span></button>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut pretium.</p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">How to download a template?</span><span className="icon" aria-hidden="true"></span></button>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Why should i choose a free website?</span><span className="icon" aria-hidden="true"></span></button>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut potenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                            <img src="assets/images/faq.jpg" alt="" className="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Homebottomnewsletter() {
    return (
        <>
            <section className="w3l-bottom py-5" id="newsletter">
                <div className="container py-md-5 py-md-4 text-center">
                    <div className="row">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <div className="subscribe mx-auto">
                                <div className="header-section text-center mx-auto">
                                    <h3 className="title-big">Subscribe Newsletter </h3>
                                    <p className="mt-2"> Enter your email & receive the latest news, updates & special offers from us.</p>
                                </div>
                                <form action="#" method="post" className="subscribe-wthree pt-2 mt-md-5 mt-3">
                                    <div className="d-md-flex flex-wrap subscribe-wthree-field">
                                        <input className="form-control" type="email" placeholder="Enter your email..." name="email" autoComplete="off" required="" />
                                        <button className="btn btn-style btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Homebanner, Homeinfogrids, Homegallery, Homeserviceblock1, Homeserviceblock, Homenews, Homebottomnewsletter, Hometestinomials };