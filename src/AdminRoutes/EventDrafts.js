import React from "react";
import {Link} from "react-router-dom";
import AddTournament from "./AddTournament";
import DeleteButton from "./DeleteButton";

function EventDrafts({events}){
    const drafts = events.filter((e) => !e.published);

    const rows = drafts.map((e) => {
        if(e.end_date){
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date} - {e.end_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><button className="btn">Publish</button></td>
                </tr>
            )
        } else {
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><button className="btn">Publish</button></td>
                </tr>
            )
        }
    })

    return (
        <div>
            <h3>Event Drafts</h3>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date(s)</th>
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