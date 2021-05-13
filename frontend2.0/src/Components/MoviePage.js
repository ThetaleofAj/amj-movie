import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import Heart from "react-animated-heart";


function MoviePage(props){
  //SETTING STATE
    const [isClick, setClick] = useState(false);
    const [films, setfilms] = useState([]);
    const {MovieId} = useParams();
    //CALLING FILM FROM API AND STORING IT IN STATE
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

    const Film = films.find(data => (data.name) === (MovieId))
    let productData;
  if(Film){
    productData = (
      <div>
        <h1 className="Title">{Film.name}</h1>
        <button className="button" onClick={()=> props.addtowatchlistclick(Film)}><Heart isClick={isClick} onClick={() => setClick(!isClick)}  /></button>
        <p className="Description">{Film.description}</p>
        <p className="Details">Release date: {Film.Release_date} | Age Rating: {Film.runtime_and_agerestriction}</p>
        <div className="Player">
        <ReactPlayer url={Film.Trailer}/>
        </div>
      </div>
    )}
  else{
    productData = <h1>Loading...</h1>
    }
  return(
       <div>{productData}</div>
    ); 
}
  
  export default MoviePage;