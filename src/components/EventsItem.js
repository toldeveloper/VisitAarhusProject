/*
*PlaceItem
*Simple Component Function to stype and return a place to eat
*
*/


export default function EventsItem({events}){
    return <div style={{display:"float"}}>
            <div style={{float:"left", width:"25%"}}>{events.Name}</div>
            <div style={{float:"left", width:"75%"}}>{events.Category.Name}</div>
        </div>;
}