import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';

export default function Events() {
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

            <h1 className="categoriesTitle">Events</h1>

            <section className="categories-Subpage">
                {places.map(place => (
                    <article className="categories-Subpage__article" key={place.Id} >
                        <img className="img" src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} 
                            onClick={() => navigate(`/events/${place.Id}`)}
                        />
                        
                        {/* Name of restaurant and icons */}
                        <div className="categoryHeader">
                            <h2>{place.Name}</h2>
                            <div>
                                <FavoriteBorderIcon />
                                <AddCardIcon />
                            </div>
                        </div>
                        
                        {/* Category and description */}
                        <p>{place.Category.Name}</p>
                        {/* <p>{place.Descriptions[0].Text}</p> */}

                        {/* Location and distance */}
                        <div className="locationContainer">
                            <div>
                                <LocationOnIcon />
                                <p>{place.Address.AddressLine1}</p>
                            </div>
                            <div>
                                <NearMeIcon />
                                <p>2 km away</p>
                            </div>
                        </div>

                        <button className="readMoreButton" onClick={() => navigate(`/events/${place.Id}`)}>Read more</button>
                    </article>
                ))}
            </section>

        </section>
    );
}
