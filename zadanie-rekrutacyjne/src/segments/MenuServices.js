import { Link } from "react-router-dom";

import iconnavuxdesign from "../images/iconnavuxdesign.png"
import iconservicegraphicdesign1 from "../images/iconservicegraphicdesign1.png"
import iconserviceecommerce1 from "../images/iconserviceecommerce1.png"


function MenuServices() {

    return (
        <div className="fixed-services">
            <div className="huge-box">
                <div className="small-box">
                    <h2 className="tittle"><img src={iconnavuxdesign} alt="iconnavuxdesign"></img>UX Design</h2>
                    <p className="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="small-box">
                    <h2 className="tittle"><img src={iconservicegraphicdesign1} alt="iconservicegraphicdesign1"></img>Graphic Design</h2>
                    <p className="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="small-box">
                    <h2 className="tittle"><img src={iconserviceecommerce1} alt="iconserviceecommerce1"></img>Ecommerce</h2>
                    <p className="paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    
                </div>
            </div>
            <Link className="view-all-link" to="/services">View all <span>&#129122;</span></Link>
            
        </div>
    );
}

export default MenuServices;