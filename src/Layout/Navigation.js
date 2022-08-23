import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {listEvents} from "../utils/api";
import logo from "../goatRopers.jpg";
import "./Navigation.css";

function Navigation({unfinishedEvents, admin}){

    let dropDownEvents = unfinishedEvents.map((e) => {
        const {event_name, start_date, end_date} = e;
        if(end_date){
            //make a file in utils to format these dates;
            return <li key={event_name}><Link className="dropdown-item" to={`/events/${event_name}`}>{event_name} {start_date}-{end_date}</Link></li>
        } else {
            return <li key={event_name}><Link className="dropdown-item" to={`/events/${event_name}`}>{event_name} {start_date}</Link></li>
        }
    })

    if(!dropDownEvents.length){
        dropDownEvents=<li key="none">No Upcoming Events</li>
    }

    let adminNavLinks = null;

    if(admin){
        //link to tournaments page???
        adminNavLinks = (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-events">Admin Events</Link>
                </li>
            </>

        )
    }
    

    return (
        <header>
            <div className="title sticky-top container-fluid">
                <div className="row">
                    <div className="col logo-motto">
                        <img className="logo" src={logo} alt="Goat Ropers logo"/>
                        <p>Goat Ropers... trying to gather the G.O.A.T.'s</p>
                    </div>
                    <div className="col signin">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
            <nav className="navbar sticky-top navbar-expand-lg " style={{backgroundColor: "#00C49A"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Goat Ropers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Upcoming Events
                                </a>
                                <ul className="dropdown-menu">{dropDownEvents}</ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/results">Results</Link>
                            </li>
                            <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {adminNavLinks}
                        </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Navigation;



