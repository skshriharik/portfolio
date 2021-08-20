import React , {useState , useEffect} from "react";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import {MovieState} from "../MovieState.js";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies , setMovies] = useState(MovieState);  
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    },[movies,url]);

    return (
    <>
    {movie && (
        <Details>
        <Headline>
            <h2>
                {movie.title}
            </h2>
                <img src = {movie.mainImg} alt="movie"/>
        </Headline>
        <Awards>
            {movie.awards.map((award) =>(
             <Award title={award.title} desc={award.description} key={award.title}/>   
            ))}
        </Awards>
        <ImageDisplay>
            <img src={movie.secondaryImg} alt = "Secondaey image"/>
        </ImageDisplay>
    </Details>
    )}
    </>
    );
}

const Details = styled.div`
    color: white;
`;

const Headline = styled.div `
min-height: 90vh;
padding-top: 20vh;
position: relative;
img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50% , -10%);
}

`;

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: center;
`;
const AwardStyle = styled.div`
padding: 5rem;
h3{
    font-size: 2rem;
}
.line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
}
p{
    padding: 2rem 0rem;
}
`;

const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`;
const Award = ({title, desc}) => {
    return (
        <AwardStyle>
            <h3>
                {title}
            </h3>
            <div className="line"></div>
            <p>
                {desc}
            </p>
        </AwardStyle>
    );
}


export default MovieDetail;