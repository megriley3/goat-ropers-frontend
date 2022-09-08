import React, {useState} from "react";
import {Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";
import ErrorAlert from "../Layout/ErrorAlert";
import "./PublishedEvents.css"

function PublishedEvents({events, loadEvents}){
    const [error, setError] = useState(null);
    const futurePublishedEvents = events.filter((e) => e.published && !e.finished);
    const pastPublishedEvents = events.filter((e) => e.published && e.finished);
    let pastTable = null;

    const rowsA = futurePublishedEvents.map((e) => {
        if(e.end_date){
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date} - {e.end_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><DeleteButton eventId={e.event_id} loadEvents={loadEvents} setError={setError}/></td>
                </tr>
            )
        } else {
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date}</td>
                    <td><Link to={`/admin/${e.event_id}`}>Details</Link></td>
                    <td><DeleteButton eventId={e.event_id} loadEvents={loadEvents} setError={setError}/></td>
                </tr>
            )
        }
    })

    const rowsB = pastPublishedEvents.map((e) => {
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>Results</td>
                </tr>
            )
    })

    if(pastPublishedEvents.lenth){
        pastTable = ( 
            <>
                <h5>Past Events</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>{rowsB}</tbody>
                </table>
            </>          
        
)
    }

    return (
        <div>
            <ErrorAlert error={error}/>
            <h3>Published Events</h3>
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
                    {rowsA}
                </tbody>
            </table>
            {pastTable}
        </div>
)
}

export default PublishedEvents;