import { useState } from "react";
import { Link } from "react-router-dom";

const AppNav = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const [menuModalVisible, setmenuModalVisible] = useState(false);

    const handleClickOn = () => {
        setmenuModalVisible(true);
    };

    const handleClickOut = () => {
        setmenuModalVisible(false);
    };

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
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/services">Services</Link>
                            <div>
                                <div>
                                    <div
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <span className="dot"><i className="arrow down"></i></span>
                                    </div>

                                    {isHovering && (
                                        <div className="fixedServices">
                                        <div className="box">
                                            <div className="boxtext2">UX Design</div>
                                            <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                        </div>
                                        <div className="box"> 
                                            <div className="boxtext2">Graphic Design</div>
                                            <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                        </div>
                                        <div className="box"> 
                                            <div className="boxtext2">Ecommerce</div>
                                            <div className="boxtext1">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                                        </div>
                                        <Link className="boxtext3">View all <span>&#129122;</span></Link>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li>
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
                                <div className="boxtext2">ecoprint</div>
                                <Link>Show more <span>&#129122;</span></Link>
                            </div>
                            <div className="box"> 
                                <div className="boxtext1">Website for Software House</div>
                                <div className="boxtext2">likescoding</div>
                                <Link>Show more <span>&#129122;</span></Link>
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