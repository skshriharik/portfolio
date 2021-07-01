import React from "react";
import home1 from "../img/home1.png";
//style
import styled from  "styled-components";


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </div>

                <p> Contact us for any photography and vediography and ideas that you have . We have proffesionals with timepass skils</p>
                <button> Contact us</button>
                </Description>
                <Image>
                    <img src={home1} alt="home1"/>
                </Image>

        </About>
    );
}



// Styled component
const About = styled.div`
    min-height: 90vh;
    display: flex;
    padding: 5rem 10rem;
    align-items: center;
    justify-content: space-between;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    box-shadow: 50px solid white;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;


export default AboutSection;