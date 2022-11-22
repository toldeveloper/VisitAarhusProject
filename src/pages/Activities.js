import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";

// Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";

export default function Activities() {
  const [activities, setActivites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/activities.json"
      );
      const data = await response.json();
      setActivites(data);
      // console.log(data);
    }
    getData();
  }, []);

  return (
    <section className="page">
      <h1 className="categoriesTitle">Activities</h1>

      <section className="categories-Subpage">
        {activities.map((activity) => (
          <article className="categories-Subpage__article" key={activity.Id}>
            <img
              className="img"
              src={
                activity.Files[0] ? activity.Files[0]?.Uri : imagePlaceholder
              }
              alt={activity.Name}
              onClick={() => navigate(`/places-to-eat/${activity.Id}`)}
            />

            {/* Name of restaurant and icons */}
            <div className="categoryHeader">
              <h2>{activity.Name}</h2>
              <div>
                <FavoriteBorderIcon />
                <AddCardIcon />
              </div>
            </div>

            {/* Category and description */}
            <p>{activity.Category.Name}</p>
            {/* <p>{place.Descriptions[0].Text}</p> */}

            {/* Location and distance */}
            <div className="locationContainer">
              <div>
                <LocationOnIcon />
                <p>{activity.Address.AddressLine1}</p>
              </div>
              <div>
                <NearMeIcon />
                <p>2 km away</p>
              </div>
            </div>

            <button
              className="readMoreButton"
              onClick={() => navigate(`/activities/${activity.Id}`)}
            >
              Read more
            </button>
          </article>
        ))}
      </section>
    </section>
  );
}
