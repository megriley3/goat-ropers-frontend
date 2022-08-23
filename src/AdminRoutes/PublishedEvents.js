import React from "react";
import DeleteButton from "./DeleteButton";
import "./PublishedEvents.css"

function PublishedEvents({events}){
    const futurePublishedEvents = events.filter((e) => e.published && !e.finished);
    const pastPublishedEvents = events.filter((e) => e.published && e.finished);
    let pastTable = null;

    const rowsA = futurePublishedEvents.map((e) => {
        if(e.end_date){
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date} - {e.end_date}</td>
                    <td><DeleteButton/></td>
                </tr>
            )
        } else {
            return (
                <tr key={e.event_name}>
                    <td>{e.event_name}</td>
                    <td>{e.start_date}</td>
                    <td><DeleteButton/></td>
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
            <h3>Published Events</h3>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date(s)</th>
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