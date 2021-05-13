import {React} from "react";
import { Link  } from 'react-router-dom';

const ComingSoon =(props) => {
    return(
        <>
        {props.films.filter(data => data.Rating === "3").map(film=> (
        <div key={film.id} className="image-container d-flex justify-content-start m-3">
            <Link to={`/movie/${film.name}`}><img src={film.image} alt="film" width="220" height="300"></img></Link>
        </div>
        ))}
    </>
    );
            
        
};
export default ComingSoon;