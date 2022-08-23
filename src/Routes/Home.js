import React from "react";
import {Link} from "react-router-dom";
import logo from "../goatRopers.jpg";
import "./Home.css"

function Home({unfinishedEvents, finishedEvents}){
    let publishedUnfinishedEvents = unfinishedEvents.filter((e) => e.published)
    publishedUnfinishedEvents = publishedUnfinishedEvents.map((e) => {
        return (
        <li key={e.event_name}>
                <Link to={`/events/${e.event_name}`}>{e.event_name}</Link>
                <p> - </p>
                <Link to={`/events/${e.event_name}/register`}>Register</Link>
        </li>)
    })
    return (
        <main>
            <img className="mainLogo" src={logo} alt="Goat Ropers Logo"/>
            <h2>Upcoming Events</h2>
            <ul>{publishedUnfinishedEvents}</ul>
        </main>
    )
}

export default Home