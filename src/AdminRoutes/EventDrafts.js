import React, {useState} from "react";
import {Link} from "react-router-dom";
import AddTournament from "./AddTournament";
import DeleteButton from "./DeleteButton";
import {editEvent} from "../utils/api";
import ErrorAlert from "../Layout/ErrorAlert";

function EventDrafts({events, loadEvents}){
    const [error, setError] = useState(null);
    const drafts = events.filter((e) => !e.published);

    const handleClick = ({target})=>{
        const abortController = new AbortController();
        let updatedEvent = events.find((e) => e.event_id === Number(target.value));
        updatedEvent = {
            ...updatedEvent,
            published: true
        }
        editEvent(updatedEvent, abortController.signal)
            .then(()=>loadEvents())
            .catch((err) => console.log(err))
        console.log(updatedEvent)   
    }


    const rows = drafts.map((e) => {
        if(e.end_date){
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date} - {e.end_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><button className="btn" value={e.event_id} onClick={handleClick}>Publish</button></td>
                    <td><DeleteButton eventId={e.event_id} loadEvents={loadEvents} setError={setError}/></td>
                </tr>
            )
        } else {
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><button className="btn" onClick={handleClick}>Publish</button></td>
                    <td><DeleteButton eventId={e.event_id} loadEvents={loadEvents} setError={setError}/></td>
                </tr>
            )
        }
    })

    return (
        <div>
            <ErrorAlert error={error}/>
            <h3>Event Drafts</h3>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date(s)</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
)
}

export default EventDrafts;