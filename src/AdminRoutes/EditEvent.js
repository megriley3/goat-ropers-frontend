import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {editEvent} from "../utils/api";
import ErrorAlert from "../Layout/ErrorAlert";

function EditEvent({events, loadEvents}){
    const {eventId} = useParams();
    console.log(eventId)
    const [tournaments, setTournaments] = useState([]);
    const [error, setError] = useState(null);
    const currentEvent = events.find((e) => Number(eventId) === e.event_id);
    const [updatedEvent, setUpdatedEvent] = useState(currentEvent);
    console.log(updatedEvent)

    //preserver props on refresh - need to figure this out

    /*useEffect(() => {
        setUpdatedEvent(JSON.parse(window.localStorage.getItem('updatedEvent')));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('updatedEvent', updatedEvent);
      }, [updatedEvent]);*/

    
    const handleChange = ({target}) => {
        setError(null);
        setUpdatedEvent({
            ...updatedEvent,
            [target.name]: target.value
        })
    }

    //useEffect(loadTournaments, []);


    const handleClick = ({target}) => {
        const detail = target.getAttribute('data-bs-detail');
        const detailModal = document.getElementById('changeDetails');
        const modalTitle = detailModal.querySelector('.modal-title');
        modalTitle.textContent = `Edit ${detail}`;

        const modalBody = detailModal.querySelector('.modal-body div');
        
        const modalBodyInput = detailModal.querySelector('.modal-body input');
        modalBodyInput.name = detail;
        if(detail==="Start Date"){
            modalBodyInput.name = "start_date";
            modalBodyInput.id = "start_date";
            modalBodyInput.type = "date";
            modalBodyInput.value = updatedEvent.start_date;
        } else if(detail === "End Date"){
            modalBodyInput.name = "end_date";
            modalBodyInput.id = "end_date";
            modalBodyInput.type = "date";
            modalBodyInput.value = updatedEvent.end_date;
        } else if(detail==="Event Name"){
            modalBodyInput.name = "event_name";
            modalBodyInput.id = "event_name";
            modalBodyInput.type = "text";
            modalBodyInput.value = updatedEvent.event_name;
        } else if (detail==="Location"){
            modalBodyInput.name = "location";
            modalBodyInput.id = "location";
            modalBodyInput.type = "text";
            modalBodyInput.value = updatedEvent.location;
        }
        

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        editEvent(updatedEvent, abortController.signal)
            .then(() => loadEvents())
            .catch(setError)
    }

    if(currentEvent){
        return (
            <main>
                <ErrorAlert error={error}/>
                <h2>{currentEvent.event_name}</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{currentEvent.event_name}</td>
                            <td>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#changeDetails" data-bs-detail="Event Name" onClick={handleClick}>Change</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>eventLocation</td>
                            <td>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#changeDetails" data-bs-detail="Location" onClick={handleClick}>Change</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td>{currentEvent.start_date}</td>
                            <td>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#changeDetails" data-bs-detail="Start Date" onClick={handleClick}>Change</button>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>{currentEvent.end_date}</td>
                            <td>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#changeDetails" data-bs-detail="End Date" onClick={handleClick}>Change</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                        
            <div className="modal fade" id="changeDetails" tabIndex="-1" aria-labelledby="detailEdit" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="detailEdit">Edit</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="event_name" onChange={handleChange}/>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit} data-bs-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
            </div>

            </main>
        )
    } else {
        return <p>This goat is a little slow.</p>
    }


}

export default EditEvent;