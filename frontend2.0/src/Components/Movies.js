import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';


const Movies =(props)=>{
  //SETTING STATE
const [films, setfilms] = useState([])
  //CALLING MOVIE FROM API AND STORING IT IN STATE
  const getFilm = async () => {
    const url = "http://andyson2.pythonanywhere.com/api"
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setfilms(responseJson);
  };
  useEffect(() => {
    getFilm();
  }, []);
    return(
        <>
            {films.filter(data => data.FilmType === "Movie").map(film=> (
              <div >
                <div className=" image-container d-flex justify-content-start m-3" key={film.id}>
              <Link to={`/movie/${film.name}`}><img src={film.image} alt="film" width="220" height="300"></img></Link>
            </div>
              </div>
            
            ))}
        </>
       
    ); 



}
export default Movies;


