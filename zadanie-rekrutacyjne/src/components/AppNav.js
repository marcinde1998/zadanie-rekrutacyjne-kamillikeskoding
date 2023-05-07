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

    const [menuModalVisible, setmenuModalVisible] = useState(false);

    return (

        <nav className="mainNav">


            <div className="navBarPortfolio">
                <ul>
                    <li>
                        <div>
                            <Link className="servicesv1" to="/services">New projects in our portfolio.<span> Come check now <span>&#129122;</span></span></Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="navBar">
                <div>
                    <div>
                    <img src={logolikescoding} alt="logo-likescoding"></img>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <ul>
                        <li className="hoverEvent">
                            <Link to="/services" >Services</Link>
                            <div>
                                <div>
                                    <div
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <span className="dot"><i className="arrow"></i></span>
                                    </div>

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
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li className="clickedEvent">
                            <Link to="/portfolio">Portfolio</Link>
                            <div>
                                <span className="dot" onClick={() => {
                                    if (menuModalVisible === true) {
                                        setmenuModalVisible(false);
                                    } else {
                                        setmenuModalVisible(true);
                                    }

                                }}><i className="arrow down"></i></span>
                            </div>
                        </li>
                    </ul>
                    {menuModalVisible && (<div>
                        <div className="fixedPortfolio">
                            <div className="box">
                                <div className="boxtext1">Ecomence shop for Printing House</div>
                                <img className="boximg" src={ecoprintlogo} alt="ecoprint"></img>
                                <Link className="showmoreone">Show more <span>&#129122;</span></Link>
                            </div>
                            <div className="box"> 
                                <div className="boxtext1">Website for Software House</div>
                                <img className="boximg" src={likescodinglogo} alt="likescodinglogo"></img>
                                <Link className="showmoretwo">Show more <span>&#129122;</span></Link>
                            </div>
                            <Link className="boxtext3">View all <span>&#129122;</span></Link>
                        </div>
                    </div>)}


                </div>
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