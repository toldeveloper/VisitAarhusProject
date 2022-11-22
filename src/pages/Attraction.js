import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";

export default function Attraction() {
    const params = useParams();
    const placeId = parseInt(params.id);
    const [place, setPlace] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/attractions.json");
            const data = await response.json();

            const placeData = data.find(item => item.Id === placeId);
            setPlace(placeData);
            console.log(placeData);
        }
        if (placeId) {
            getData();
        }
    }, [placeId]);

    return (
        <section className="categories-Specific-Page">

            <h1 className="categoriesTitle">{place?.Name}</h1>

            <img src={place.Files?.length ? place?.Files[0]?.Uri : imagePlaceholder} alt={place.Name} />
            
            <h5>Category: {place.Category?.Name}</h5>
            
            {place.Descriptions?.map(description => (
                <article key={description.DescriptionTypeID} dangerouslySetInnerHTML={{ __html: description.Html }}></article>
            ))}
        </section>
    );
}
