import Footer from "../common/footer";
import Header from "../common/header";

export default function Services(){
    return(
        <>
        <Header />
        <Servicebreadcrumb />
        <Serviceblock1 />
        <Serviceblock2 />
        <Servicehandcrafted />
        <Footer />
        </>
    );
}
function Servicebreadcrumb(){
    return(
        <>
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
        </>
    );
}
function Serviceblock1(){
    return(
        <>
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
        </>
    );
}
function Serviceblock2(){
    return(
        <>
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
        </>
    );
}

// ***************************************************************************************
var homeserviceblockdata = [{ "icon": "fa fa-retweet", "title-head": "Social Media Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-clock-o", "title-head": "Branding Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-line-chart", "title-head": "UI/UX Design", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-trash-o", "title-head": "Digital Product Strategy", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-video-camera", "title-head": "Web Hosting Service", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." }, { "icon": "fa fa-search-plus", "title-head": "SEO Services", "para": "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duissed et dolor sit amet." },];

function Servicehandcrafted(){
    return(
        <>
        <section className="w3l-servicesblock1 py-5" id="moreservices">
                <div className="container py-lg-5 py-md-4 py-3">
                    <h3 className="title-big text-center">Hand-crafted services</h3>
                    <div className="grids-area-hny main-cont-wthree-fea row ">
                        
                        {
                            homeserviceblockdata.map(
                                (a,i)=>{
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
                    <span className={props.icon+" mt-0"}></span>
                    <div className="area-box-info">
                        <h4><a href="#feature" className="title-head">{props.title}</a></h4>
                        <p className="mt-lg-3 mt-2">{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export {Servicebreadcrumb, Serviceblock1, Serviceblock2, Servicehandcrafted};