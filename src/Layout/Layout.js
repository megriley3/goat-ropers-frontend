import React, {useState, useEffect} from "react";
import Routes from "./Routes";
import Navigation from "./Navigation";
import {listEvents} from "../utils/api";
import ErrorAlert from "./ErrorAlert";
//import "./Layout.css";

function Layout(){
    const [events, setEvents] = useState([]);
    const [signedIn, setSignedIn] = useState(false);
    const [admin, setAdmin] = useState(true);
    const [error, setError] = useState(null);

    useEffect(loadEvents, []);

    function loadEvents(){
        const abortController = new AbortController();
        listEvents(abortController.signal)
            .then(setEvents)
            .catch(setError)
        return () => abortController.abort();
    }

    const unfinishedEvents = events.filter((e) => !e.finished);
    const publishedUnfinishedEvents = unfinishedEvents.filter((e)=> e.published)
    const finishedEvents = events.filter((e)=>e.finished);



    return (
        <div>
            <Navigation unfinishedEvents={publishedUnfinishedEvents} admin={admin}/>
            <ErrorAlert error={error}/>
            <Routes unfinishedEvents={unfinishedEvents} finishedEvents={finishedEvents} setEvents={setEvents} events={events} loadEvents={loadEvents}/>
        </div>
    )
}

export default Layout