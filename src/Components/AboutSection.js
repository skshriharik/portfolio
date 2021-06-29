import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>

                <p> Contact us for any photography and vediography and ideas that you have . We have proffesionals with timepass skils</p>
                <button> Contact us</button>

                <div className="image">
                    <img src={home1} alt="home1"/>
                </div>
            </div>

        </div>
    );
}

export default AboutSection;