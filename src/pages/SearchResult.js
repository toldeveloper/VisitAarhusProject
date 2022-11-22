import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagePlaceholder from "../img/img-placeholder.jpeg";

export default function PlaceToEat() {
    const params = useParams();
    const dataId = parseInt(params.id);
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json");
            const data = await response.json();

            const Data = data.find(data => data.Id === dataId);
            setData(Data);
            console.log(Data);
        }
        if (dataId) {
            getData();
        }
    }, [dataId]);

    return (
        <section className="page">
            <h1>{data?.Name}</h1>
            <img src={data.Files?.length ? data?.Files[0]?.Uri : imagePlaceholder} alt={data.Name} />
            <h4>Category: {data.Category?.Name}</h4>
            {data.Descriptions?.map(description => (
                <article key={description.DescriptionTypeID} dangerouslySetInnerHTML={{ __html: description.Html }}></article>
            ))}
        </section>
    );
}
