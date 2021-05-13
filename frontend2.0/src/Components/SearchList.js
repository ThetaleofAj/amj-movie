import React from "react";
import { Link  } from 'react-router-dom';



const SearchList =(props) => {
    return(
        <>
        {props.films.map((movie,index) => (
        <div className="image-container d-flex justify-content-start m-3">
            <Link to={`/movie/${movie.name}`}><img src={movie.image} alt="film" width="220" height="300"></img></Link> 
        </div>
            ))}
        </>
    );
            
        
};

export default SearchList;