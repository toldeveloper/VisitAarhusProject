/*
*SaveItem
*Simple Component Function to stype and return a save to eat
*
*/


export default function SaveItem({save}){
    return <div style={{display:"float"}}>
            <div style={{float:"left", width:"25%"}}>{save.Name}</div>
            <div style={{float:"left", width:"75%"}}>{save.Category.Name}</div>
        </div>;
}