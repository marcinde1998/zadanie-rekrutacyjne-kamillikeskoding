import { useState } from "react";
import { Link } from "react-router-dom";
import logolikescoding from "../images/logolikescoding.svg"
import ecoprintlogo from "../images/ecoprintlogo.png"
import likescodinglogo from "../images/likescodinglogo.png"
import iconnavuxdesign from "../images/iconnavuxdesign.png"
import iconservicegraphicdesign1 from "../images/iconservicegraphicdesign1.png"
import iconserviceecommerce1 from "../images/iconserviceecommerce1.png"

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
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hoverEvent">
                        <Link to="/services" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Services</Link>
                        <span className="dot"><i className="arrow"></i></span>
                        <div>
                            {isHovering && (
                                <div className="fixedServices">
                                    <div className="box">
                                        <div className="boxtext2"><img src={iconnavuxdesign} alt="iconnavuxdesign"></img>UX Design</div>
                                        <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                    </div>
                                    <div className="box">
                                        <div className="boxtext2"><img src={iconservicegraphicdesign1} alt="iconservicegraphicdesign1"></img>Graphic Design</div>
                                        <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                    </div>
                                    <div className="box">
                                        <div className="boxtext2"><img src={iconserviceecommerce1} alt="iconserviceecommerce1"></img>Ecommerce</div>
                                        <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                    </div>
                                    <Link className="boxtext3" to="/services">View all <span>&#129122;</span></Link>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="clickedEvent">
                        <button className={`buttonPortfolio ${clicked ? 'clicked' : ''}`}
                            onClick={handleToggleMenu} onBlur={handleCloseMenu}>Portfolio
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
                                    <Link className="view-all">View all <span>&#129122;</span></Link>
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