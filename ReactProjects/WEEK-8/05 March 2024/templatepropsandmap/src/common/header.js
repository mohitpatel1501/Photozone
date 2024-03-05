import { Link } from "react-router-dom";

export default function Header() {
    

    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark stroke">
                        <h1><Link className="navbar-brand" to='/'> Web service</Link></h1>
                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mr-5">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item @@about__active">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item @@services__active">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item @@contact__active">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <nav className="ml-lg-3">
                                    <div className="search-bar">
                                        <form action="#" method="GET" className="search">
                                            <input type="search" className="search__input" name="search"
                                                placeholder="Search here.." onload="equalWidth()" autoComplete="off" required  />
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
            </>
    );
}