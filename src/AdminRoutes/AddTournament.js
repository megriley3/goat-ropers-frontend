import React from "react";

function AddTournament(){
    const handleClick = () => console.log("add");
    
    return <button className="btn" onClick={handleClick}>+ Add Tournament</button>
}

export default AddTournament;