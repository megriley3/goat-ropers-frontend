import React, {useState }from "react";
import TournamentForm from "./TournamentForm";

function TournamentsList(){
    const [tournaments, setTournaments] = useState([]);

    let list = <p>No tournaments yet.</p>

    const handleClick = () => console.log("clicked");


    return (
        <div id="tournamentList" >
            <h3>Tournaments</h3>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginBottom: "2%", justifyContent: "flex-end"}}  >
                <button className="btn btn-secondary" onClick={handleClick} style={{fontWeight: "bold"}} data-bs-toggle="modal" data-bs-target="#addTournament" >+ New Tournament</button>
            </div>
            <TournamentForm/>
            {list}

           

        </div>
    )
}


export default TournamentsList;