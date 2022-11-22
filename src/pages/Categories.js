import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories.json");
            const data = await res.json();
            console.log(data);
            setCategories(data);
        }

        getData();
    }, []);

    // Put category name inside "useNavigate()"
    function navigateTo(categoryName) {
        const path = "/" + categoryName.replaceAll(" ", "-").toLowerCase();
        navigate(path);
    }

    return (
        <section>
            <h1 className="categoriesTitle">Categories</h1>
            <section className="grid-container">
                {categories.map(category => (
                    <article className="categoryCard" key={category.Id} onClick={() => navigateTo(category.Name)}>
                        <div className="categoryCard--titleDIV">
                            <h2>{category.Name}</h2>
                        </div>
                    </article>
                ))}
            </section>
        </section>
       
    );
}