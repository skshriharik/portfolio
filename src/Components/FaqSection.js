import react from "react";
import styled from "styled-components";
import {About} from "../styles";

const FaqSection = () => {
    return (    
        <Faq className="faq">
            <h2>
                Any Questions <span> FAQ </span>
            </h2>
            <div className="question">
                <h4>How do i start ?</h4>
                <div className="answer">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <p> Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="faq-line"></div>
            </div>
           
            <div className="question">
                <h4>Daily  schedules ?</h4>
                <div className="answer">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing. antidode to the existing cricis of the world.
                </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment menthods ?</h4>
                <div className="answer">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>What Products you offer ?</h4>
                <div className="answer">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quaerat modi!
                </p>
                </div>
                <div className="faq-line"></div>
            </div>



        </Faq>

    );   
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%auto;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding:1rem 0rem;
        }
    }
`;

export default FaqSection;