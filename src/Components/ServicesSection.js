import clock from '../img/clock.svg';
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg"
import home2 from "../img/home2.png";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
    return (
    <div className="services">
        <div className="description">
            <h2> High <span>Quality</span> Services</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="icon"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="icon"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="icon"/>
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="icon"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet. amet.</p>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={home2} alt="alternative "/>
        </div>
    </div>
    );
}

export default ServicesSection;