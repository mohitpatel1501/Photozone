import Footer from "../common/footer";
import Header from "../common/header";

export default function About() {
    return (
        <>
            <Header />
            <Aboutbreadcrumbs />
            <Aboutblock1 />
            <Aboutblock2 />
            <Aboutteam />
            <Aboutclients />
            <Footer />
        </>
    );
}
function Aboutbreadcrumbs() {
    return (
        <>
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
        </>
    );
}
function Aboutblock1() {
    return (
        <>
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

        </>
    );
}
function Aboutblock2() {
    return (
        <>
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
        </>
    );
}

// **************************************************************************************

var aboutteamdata = [{ "image": "team1.png", "para": "Our web design team will spend time with our digital marketing team.", "name": "John Marshall", "work": "Designer" }, { "image": "team2.png", "para": "Our web design team will spend time with our digital marketing team.", "name": "Steve Roberts", "work": "Photographer" }, { "image": "team3.png", "para": "Our web design team will spend time with our digital marketing team.", "name": "Michael Cartney", "work": "Designer" },];

function Aboutteam() {
    return (
        <>
            <section className="w3l-team py-5" id="team">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h3 className="title-big text-center mx-0 mb-lg-5 mb-4">Meet the Team </h3>
                    <div className="row team-row">

                        {
                            aboutteamdata.map(
                                (a, i) => {
                                    return <Aboutteamprops img={aboutteamdata[i]["image"]} para={aboutteamdata[i]["para"]} name={aboutteamdata[i]["name"]} work={aboutteamdata[i]["work"]} />
                                }
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

function Aboutteamprops(props) {
    return (
        <>
            <div className="col-lg-4 col-sm-6 team-wrap mt-sm-0 mt-5">
                <div className="team-member text-center">
                    <div className="team-img">
                        <img src={"assets/images/" + props.img} alt="" className="img-fluid radius-image" />
                        <div className="overlay">
                            <div className="team-details text-center">
                                <p>
                                    {props.para}
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
                    <a href="#team"><h6 className="team-title">{props.name}</h6></a>
                    <p>{props.work}</p>
                </div>
            </div>
        </>
    );
}

// ********************************************************************************************

var aboutclientsdata=[{"image":"brand1.png"},{"image":"brand2.png"},{"image":"brand3.png"},{"image":"brand4.png"},{"image":"brand5.png"},{"image":"brand6.png"},{"image":"brand5.png"},{"image":"brand4.png"},{"image":"brand6.png"},{"image":"brand3.png"},{"image":"brand2.png"},{"image":"brand1.png"},];

function Aboutclients() {
    return (
        <>
            <section className="w3l-clients py-5" id="clients">
                <div className="call-w3 py-lg-5 py-md-4 py-2">
                    <div className="container">
                        <h3 className="title-big text-center">Our Clients</h3>
                        <div className="company-logos text-center mt-sm-5 mt-4">
                            <div className="row logos">
                                {
                                    aboutclientsdata.map(
                                        (a,i)=>{
                                            return <Aboutclientsprops img={aboutclientsdata[i]["image"]} />
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Aboutclientsprops(props) {
    return (
        <>
            <div className="col-lg-2 col-md-3 col-4">
                <img src={"assets/images/"+props.img} alt="" className="img-fluid" />
            </div>
        </>
    );
}

export { Aboutbreadcrumbs, Aboutblock1, Aboutblock2, Aboutteam, Aboutclients };
