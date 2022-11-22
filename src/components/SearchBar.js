

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";
import "./SearchBar.css"

function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchTimer, setSearchTimer] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const [SearchData, setSearchData] = useState([]);
 

  useEffect(() => {
      async function getSearchData() {
          const response = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json");
          const data = await response.json();
          setSearchData(data);
          console.log(data);
      }
      getSearchData();
  }, []);
 

  const updateSearch = (e) => {
    setLoading(true);
    clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        setSearch(e.target.value);
        setLoading(false);
      }, 900)
    );
  };

  if (loading) {
    return (
      <div>
        
        <div>
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Type your search..."
            onChange={updateSearch}
          />

          <div>
            <h1>Loading...</h1>
          </div>
        </div>
       
      </div>
      
    );
  }

  return (
    <div>
<div className="flexbox">
        <>
            <select onChange={updateSearch} className="searchbar">
              <option value=''>Find Places Near You</option>
                <option value='Attractions'>Attractions</option>
               <option value='Activities'>Activities</option>
                <option value='Events'>Events</option>
               <option value='Cafés'>Cafés</option>
               <option value='Restaurants'>Restaurants</option>

            </select>
         </> 

      <div>
        <input
          type="text"
          name="search"
          autoComplete="off"
          onChange={updateSearch}
          placeholder="&#128269;"
          className="searchbar search"
        />
</div>
               
        <div>
          {SearchData.filter((data) => {
            console.log("new request");
            if (search === "") ;
            else if (data.Name.toLowerCase().includes(search.toLowerCase()))
              return data;
            // else if (data.Id.includes(search)) return data;
            else if (data.Category.Name.toLowerCase().includes(search.toLowerCase()))
              return data;
          })
          
      .map((data) => {
            return (
                <article className="searchResultArticle" key={data.Id} onClick={() => navigate(`/explore/${data.Id}`)}>
                  <img src={data.Files[0] ? data.Files[0].Uri : imagePlaceholder} alt={data.Name} />
                  <div>
                    <h2>{data.Name}</h2>
                    <p>{data.Category.Name}</p>
                  </div>
                </article>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;




























