import React from "react";



const WatchList =(props) => {
    return(
        <>
        {props.films.map((movie,index) => (
        <div className=" image-container d-flex justify-content-start m-3">
             <img src={movie.image} alt="film" width="220" height="300"></img>
             <div onClick={()=> props.addtowatchlistclick(movie)}
              className='overlay d-flex align-items-center justify-content-center'>
						Remove from WatchList
					</div>
        </div>
            ))}
        </>
    );
            
        
};



export default WatchList;