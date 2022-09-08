import React, {useState} from "react";
import ErrorAlert from "../Layout/ErrorAlert";
import {useParams} from "react-router-dom";
import { addTournament } from "../utils/api";

function TournamentForm({dates}){
    const {eventId} = useParams();
    const initialData = {
        tournament_name: "",
        tournament_date: "",
        start_time: "",
        checkin_time: "",
        level: "",
        gender: "",
        format: "",
        type: "",
        team_size: 0,
        subs: 0, 
        event_id: eventId
    }
    const [tournamentData, setTournamentData] = useState(initialData);
    const [error, setError] = useState(null)

    dates = dates.map((date, index) => <option value="date" key={index}>{date}</option>)

    const handleClick = () => {
        setError(null);
        console.log("clicked");}

    const handleChange = ({target}) => {
        setError(null)
        console.log(target);
        setTournamentData({
            ...tournamentData,
            [target.name]: target.value
        })
    }

    const handleCreate = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        addTournament(tournamentData, abortController.signal)
            .then(() => console.log(tournamentData))
            .then( setTournamentData(initialData))
            .catch(setError)

    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "5%", marginRight: "5%", marginBottom: "2%", justifyContent: "flex-end"}}  >
                <button className="btn btn-secondary" onClick={handleClick} style={{fontWeight: "bold"}} data-bs-toggle="modal" data-bs-target="#addTournament" >+ New Tournament</button>
            </div>
        <div className="modal fade" id="addTournament" tabIndex="-1" aria-labelledby="addTournament" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Tournament</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <ErrorAlert error={error} />
                <form>
                    <div className="mb-3">
                        <label htmlFor="tournament_name" className="col-form-label">Tournament Name</label>
                        <input type="text" className="form-control" id="tournamet_name" name="tournament_name" onChange={handleChange} value={tournamentData.tournament_name} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tournament_date" className="col-form-label">Tournament Date</label>
                        <select className="form-control" id="tournamet_date" name="tournament_date" onChange={handleChange} value={tournamentData.tournament_date} required>
                            <option value="">Select a Date</option>
                            {dates}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="start_time" className="col-form-label">Start Time</label>
                        <input type="time" className="form-control" id="start_time" name="start_time" onChange={handleChange} value={tournamentData.start_time} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="checkin_time" className="col-form-label">Check-In Time</label>
                        <input type="time" className="form-control" id="checkin_time" name="checkin_time" onChange={handleChange} value={tournamentData.checkin_time} required/>
                    </div>
                        <div className="mb-3">
                        <label htmlFor="level" className="col-form-label">Level</label>
                        <select className="form-control" id="level" name="level" onChange={handleChange} value={tournamentData.level} required>
                            <option value="">Select a Level</option>
                            <option value="open">Open</option>
                            <option value="power">Power</option>
                            <option value="club">Club</option>
                            <option value="a">A</option>
                            <option value="aa">AA</option>
                            <option value="b">B</option>
                            <option value="bb">BB</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="col-form-label">Gender</label>
                        <select className="form-control" id="gender" name="gender" onChange={handleChange} value={tournamentData.gender} required>
                            <option value="">Select a Gender</option>
                            <option value="coed">Coed</option>
                            <option value="women">Women's</option>
                            <option value="men">Men's</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="format" className="col-form-label">Format</label>
                        <select className="form-control" id="format" name="format" onChange={handleChange} value={tournamentData.format} required>
                            <option value="">Select a Format</option>
                            <option value="roundRobin">Round Robin</option>
                            <option value="doubleElim">Double Elimination</option>
                            <option value="singleElim">Single Elimination</option>
                            <option value="poolPlay">Pool Play</option>
                            <option value="manual">Manual</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="col-form-label">Type</label>
                        <select className="form-control" id="type" name="type" onChange={handleChange} value={tournamentData.type} required>
                            <option value="">Select a Type</option>
                            <option value="indoor">Indoor</option>
                            <option value="sand">Sand</option>
                            <option value="grass">Grass</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="team_size" className="col-form-label">Team Size</label>
                        <input type="integer" className="form-control" id="team_size" name="team_size" onChange={handleChange} value={tournamentData.team_size} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subs" className="col-form-label">Subs Allowed</label>
                        <input type="integer" className="form-control" id="subs" name="subs" onChange={handleChange} value={tournamentData.subs} />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                <button type="button" className="btn btn-primary" onClick={handleCreate} data-bs-dismiss="modal">Create</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default TournamentForm;