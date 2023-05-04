import { Link } from "react-router-dom";

const AppNav = () => {


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
                    </li>
                </ul>
                
                <ul>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
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