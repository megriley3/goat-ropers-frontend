import React, {useState }from "react";
import TournamentForm from "./TournamentForm";

function TournamentsList({selectedEvent}){
    const [tournaments, setTournaments] = useState([]);

    const {start_date} = selectedEvent;
    let dateToAdd = new Date(start_date+"T00:00")
    let {end_date} = selectedEvent;
    end_date = new Date(end_date+"T00:00")
    const dates = [start_date]

    if(end_date.length){
        //dateToAdd.setDate(dateToAdd.getDate()+1);
       while(dateToAdd.getTime() !== end_date.getTime()){
        console.log(dateToAdd!== end_date)
        let formattedDate = dateToAdd.toISOString();
        formattedDate = formattedDate.split("T")[0];
        dates.push(formattedDate);
        dateToAdd.setDate( dateToAdd.getDate()+1)
       }  
       dateToAdd = dateToAdd.toISOString();
       dateToAdd = dateToAdd.split("T")[0]
       dates.push(dateToAdd);
    }

    let list = <p>No tournaments yet.</p>


    return (
        <div id="tournamentList" >
            <h3>Tournaments</h3>
            <TournamentForm dates={dates}/>
            {list}

           

        </div>
    )
}


export default TournamentsList;