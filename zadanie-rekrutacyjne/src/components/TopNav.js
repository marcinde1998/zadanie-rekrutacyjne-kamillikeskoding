import { Link } from "react-router-dom";

function TopNav() {

    return (

        <nav className="topNav">
            <div className="navBarPortfolio">
                <ul>
                    <li>
                        <div>
                            <Link className="servicesv1" to="/services">New projects in our portfolio.<span> Come check now <span>&#129122;</span></span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;