
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SaveItem from "./SaveItem";
// import "./Calendar.css"

// export default function Save() {
//     const [search, setSearch] = useState("");
//   const [searchTimer, setSearchTimer] = useState();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();



//   const [SearchData, setSearchData] = useState([]);
 

//   useEffect(() => {
//       async function getSearchData() {
//           const response = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json");
//           const data = await response.json();
//           setSearchData(data);
//           console.log(data);
//       }
//       getSearchData();
//   }, []);
 

//   const updateSearch = (e) => {
//     setLoading(true);
//     clearTimeout(searchTimer);
//     setSearchTimer(
//       setTimeout(() => {
//         setSearch(e.target.value);
//         setLoading(false);
//       }, 900)
//     );
//   };
//     // window.onload=function()
//     //     {document.getElementById("breakfast2")
//     //     .addEventListener('click', function(event) {
//     //       document.getElementById("mealTableContainer2").classList.remove('hidden');
//     //     });}
// return (
//     <div>
//     .map((data) => {
//         return (
//           <article key={data.Id} onClick={() => navigate(`/explore/${data.Id}`)}>
//           <img src={data.Files[0] ? data.Files[0].Uri : imagePlaceholder} alt={data.Name} />
//           <h2>{data.Name}</h2>
//           <p>{data.Category.Name}</p>
//       </article>
//         );
//       })
//       </div>
//       )
// //             return (
// // <div>
// // <button onChange={updateSearch} id="breakfast2">Save</button>
// // <table id="mealTableContainer2" className="hidden">
// //   <thead>
// //     <tr>
// //       <th id="mealname">
// //         {
// //            data.map(data =>(<SaveItem data={data} key={data.id}/>))
// //         }
// //         </th>
// //     </tr>
// //   </thead>
// //   <tbody id="mealContainer2"></tbody>
// // </table>
// // </div>
// //             );
// // onclick - add saved class
// // filter saved class, includes
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../img/img-placeholder.jpeg";

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

          
        </div>
       
      </div>
      
    );
  }
  

  return (
    <div>


      <div>
      
      
        
      <>
      <button onChange={updateSearch} id="breakfast2">Save</button>
      </>     
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



                
              <article key={data.Id} onClick={() => navigate(`/explore/${data.Id}`)}>
              <img src={data.Files[0] ? data.Files[0].Uri : imagePlaceholder} alt={data.Name} />
              <h2>{data.Name}</h2>
              <p>{data.Category.Name}</p>
          </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;




























