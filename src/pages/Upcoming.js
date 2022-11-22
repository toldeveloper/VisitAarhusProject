import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";


export default function Upcoming() {
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/events.json");
            const data = await response.json();
            setPlaces(data);
            // console.log(data);
        }
        getData();
    }, []);

    return (
        <section className="page">

<span>
            <section className="categories-Subpage" style={{ overflow: "auto", whiteSpace: "nowrap" }}>
                {places.map(place => (
                    <article className="categories-Subpage__article" key={place.Id} style={{ display: "inline-block", width: "40vw", marginRight: 15, fontSize: "10pt"}}>
                        <img className="img" src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} 
                            onClick={() => navigate(`/events/${place.Id}`)}
                        />
                        
                        {/* Name of restaurant and icons */}
                        <div className="categoryHeader">
                            <h3>{place.Name}</h3>
                        </div>
                        <div>
                            <p>12 - 13 Dec 2022</p>
                        </div>
                        
                    </article>
                ))}
            </section>
            </span>
        </section>
    );
}
