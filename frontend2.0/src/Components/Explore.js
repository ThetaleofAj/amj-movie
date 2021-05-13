import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchList from "./SearchList";

const Explore =()=>{
  //SETTING STATES
    const [query, setQuery] = useState('');
    const [searchFilm, setFilmSearch] = useState([]);

   //CALLING QUERY OBJECT FROM API VIA API SEARCH LINK
    const seek = (e) => {
        if (e.key === "Enter") {
        fetch(`http://andyson2.pythonanywhere.com/api?search=${query}`)
          .then((res) => res.json())
          .then((result) => {
            setQuery("");
            setFilmSearch(result);
            console.log(result);
             }
             );
            }
      };
      return(
      <div>
          <div class="input-group w-50">
        <input type="search" class="form-control rounded" placeholder="Search"
                  aria-label="Search" max-width="75%"
                 aria-describedby="search-addon"  
                  onChange={(e) => setQuery(e.target.value)} value={query}  onKeyPress={seek}/>
          </div>
          <div className="movie">
          <SearchList films={searchFilm}/>
          </div>
            
      </div>
    ); 
}

export default Explore;