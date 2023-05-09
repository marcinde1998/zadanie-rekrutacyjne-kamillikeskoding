import { useState } from "react";

function SectionTabs() {

    const [clicked, setClicked] = useState(false);
    const [showContentOne, setShowContentOne] = useState(false);

    const handleToggleMenuOne = () => {
        setShowContentOne(!showContentOne);
        setClicked(!clicked);
    };

    const handleCloseMenuOne = () => {
        setShowContentOne(false);
        setClicked(!clicked);
    };

    const [showContentTwo, setShowContentTwo] = useState(false);

    const handleToggleMenuTwo = () => {
        setShowContentTwo(!showContentTwo);
        setClicked(!clicked);
    };

    const handleCloseMenuTwo = () => {
        setShowContentTwo(false);
        setClicked(!clicked);
    };

    const [showContentThree, setShowContentThree] = useState(false);

    const handleToggleMenuThree = () => {
        setShowContentThree(!showContentThree);
        setClicked(!clicked);
    };

    const handleCloseMenuThree = () => {
        setShowContentThree(false);
        setClicked(!clicked);
    };


    return (
        <section id="tabs">
            <ul className="tabs">
                <li className="tabs-box">
                    <div><h2 className="tittle" onClick={handleToggleMenuOne} onBlur={handleCloseMenuOne}>UX Design</h2><span className="dot"><i className="arrow"></i></span></div>
                    {showContentOne && (<p className="content">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>)}
                </li>
                <li className="tabs-box" onClick={handleToggleMenuTwo} onBlur={handleCloseMenuTwo}>
                    <div><h2 className="tittle" >Graphic Design</h2><span className="dot"><i className="arrow"></i></span></div>
                    {showContentTwo && (<p className="content">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>)}
                </li>
                <li className="tabs-box">
                    <div><h2 className="tittle" onClick={handleToggleMenuThree} onBlur={handleCloseMenuThree}>Ecommerce</h2><span className="dot"><i className="arrow"></i></span></div>
                    {showContentThree && (<p className="content">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>)}
                </li>
            </ul>
            <img></img>
        </section>
    );
}

export default SectionTabs;