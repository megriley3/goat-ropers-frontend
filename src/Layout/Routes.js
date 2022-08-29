import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import NotFound from "./NotFound";
import About from "../Routes/About";
import Events from "../Routes/Events";
import Contact from "../Routes/Contact";
import Results from "../Routes/Results";
import SignIn from "../Routes/SignIn";
import CreateEvent from "../AdminRoutes/CreateEvent";
import EventDrafts from "../AdminRoutes/EventDrafts";
import PublishedEvents from "../AdminRoutes/PublishedEvents";
import EditEvent from "../AdminRoutes/EditEvent";

function Routes({unfinishedEvents, finishedEvents, setEvents, events, loadEvents}){
    return (

        <Switch>
            <Route exact={true} path="/">
                <Home unfinishedEvents={unfinishedEvents} finishedEvents={finishedEvents}/>
            </Route>
            <Route exact={true} path="/about">
                <About/>
            </Route>
            <Route exact={true} path="/events/:eventId">
                <Events/>
            </Route>
            <Route exact={true} path="/contact">
                <Contact/>
            </Route>
            <Route exact={true} path="/results">
                <Results/>
            </Route>
            <Route exact={true} path="/signin">
                <SignIn />
            </Route>
            <Route exact={true} path="/admin-events" >
                <CreateEvent  events = {events} loadEvents={loadEvents}/>
                <PublishedEvents events={events}/>
                <EventDrafts events={events}/>
            </Route>
            <Route exact={true} path="/admin/:eventId">
                <EditEvent events={events} loadEvents={loadEvents}/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
    </Switch>
    )
}

export default Routes;