import SearchBar from "../components/SearchBar"
import Logo from "../img/logo.png"
import Highlight from "../img/highlight.png"
import Language from "../img/language.png"
import Upcoming from "./Upcoming";
import Treasures from "./Treasures";

export default function Home() {
    return (
        <div className="homePage" style={{margin: 20}}>
            <div className="homePageSearchDiv">
                <img src={Logo} alt="" style={{ width: "45vw"}}></img>
                <img src={Language} alt="" style={{ width: "15vw", float: "right"}}></img>
            </div>
            <SearchBar/>
            <h1>Highlights</h1>
            <img src={Highlight} alt="" style={{ width: "90vw" }}></img>
            <h1>Upcoming events</h1>
            <Upcoming />
            <h1>Hidden treasures</h1>
            <Treasures />
            <div className="marginBottom"></div>
        </div>
    );
}