import { useState } from "react";
import { Link } from "react-router-dom";
import logolikescoding from "../images/logolikescoding.svg"
import ecoprintlogo from "../images/ecoprintlogo.png"
import likescodinglogo from "../images/likescodinglogo.png"
import MenuServices from "../segments/MenuServices";

const AppNav = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const [clicked, setClicked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
        setClicked(!clicked);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
        setClicked(!clicked);
    };

    return (

        <nav className="mainNav">
            <div className="navBar">
                <ul className="nav-list">
                    <li className="home-logo">
                        <img src={logolikescoding} alt="logo-likescoding"></img>
                    </li>
                    <li className="home-link">
                        <Link className="menu-link" to="/">Home</Link>
                    </li>
                    <li className="services-menu" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link className="menu-link" to="/services" >Services</Link>
                        <span className="dot"><i className="arrow"></i></span>
                        <div>
                            {isHovering && (
                                <MenuServices />
                            )}
                        </div>
                    </li>

                    <li className="portfolio-menu" onClick={handleToggleMenu} onBlur={handleCloseMenu}>
                        <button className={`buttonPortfolio ${clicked ? 'clicked' : ''}`}
                            >Portfolio
                            <span className="dot"><i className="arrow"></i></span>
                        </button>

                        {showMenu &&
                            (<div className="portfolio-container">
                                <ul className="fixed-portfolio">
                                    <li className="box">
                                        <h2 className="tittle">Ecomence shop for Printing House</h2>
                                        <img className="boximg" src={ecoprintlogo} alt="ecoprint"></img>
                                        <Link className="link-content">Show more <span>&#129122;</span></Link>
                                    </li>
                                    <li className="box">
                                        <h2 className="tittle">Website for Software House</h2>
                                        <img className="boximg" src={likescodinglogo} alt="likescodinglogo"></img>
                                        <Link className="link-content">Show more <span>&#129122;</span></Link>
                                    </li>
                                    <Link className="view-all" to="/portfolio">View all <span>&#129122;</span></Link>
                                </ul>
                            </div>)}

                    </li>
                </ul>



                {/* <div className="contactUsButton">
                <ul>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                </div> */}
            </div>
        </nav>
    );
}

export default AppNav;