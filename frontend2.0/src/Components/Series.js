import {React} from "react";
import { Link  } from 'react-router-dom';

const Series =(props) => {
    return(
        <>
        {props.films.filter(data => data.FilmType === "Series").map(film=> (
        <div key={film.id} className="image-container d-flex justify-content-start m-3">
            <Link to={`/movie/${film.name}`}><img src={film.image} alt="film" width="220" height="300"></img></Link>
        </div>
        ))}
    </>
    );
            
        
};
export default Series;