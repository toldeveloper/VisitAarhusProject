import Places from "../../components/Places"
import Events from "../../components/Events"

export default function Explore() {
    return (
        <div>
            <h1>Where should we eat?</h1>
          <div className="container">
            <Places/>
          </div>
          <h1>What should we do?</h1>
          <div className="container">
            <Events />
          </div>
        </div>
    )
}