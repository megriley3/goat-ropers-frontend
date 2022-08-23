import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import ErrorAlert from "../Layout/ErrorAlert";
import {createEvent} from "../utils/api"; 
import EventDrafts from "./EventDrafts";

function CreateEvent({loadEvents}){
    const history = useHistory();
    const [error, setError] = useState(null);

    const initialFormData = {
        event_name: "",
        start_date: "",
        end_date: "",
        logo: "",
        published: false
    }
    const [formData, setFormData] = useState(initialFormData);
    
    const handleChange = ({target}) => {
        setError(null);
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handlePublish = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        const newEvent = {
            ...formData,
            published: true
        }
        createEvent(newEvent, abortController.signal)
            .then(console.log)
            .then(() => setFormData(initialFormData))
            .then(()=>loadEvents())
            .catch(setError)
        console.log("published");
    }

    const handleCancel = () => history.goBack();

    const handleSaveDraft = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        setFormData(initialFormData);
        createEvent(formData, abortController.signal)
            .then(console.log)
            .catch(setError)
        console.log("saved as draft", formData);
    }

    return (
        <main>
            <h2>Create Event</h2>
            <ErrorAlert error={error}/>
        <form name="createevent">
            <div className="row mb-3" style={{marginRight: "2%", marginLeft: "2%"}}>
                <label htmlFor="event_name" className="col-sm-2 col-form-label">Event Name: </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="event_name" name="event_name" value={formData.event_name} onChange={handleChange} required/>
                </div>
            </div>
            <div className="row mb-3" style={{marginRight: "2%", marginLeft: "2%"}}>
                <label htmlFor="start_date" className="col-sm-2 col-form-label">Start Date: </label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" id="start_date" name="start_date" value={formData.start_date} onChange={handleChange} required/>
                </div>
            </div>
            <div className="row mb-3" style={{marginRight: "2%", marginLeft: "2%"}}>
                <label htmlFor="end_date" className="col-sm-2 col-form-label">End Date: </label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" id="end_date" name="end_date" value={formData.end_date} onChange={handleChange}/>
                </div>
            </div>
            <div className="row mb-3"  style={{marginRight: "2%", marginLeft: "2%"}}>
                <label htmlFor="eventLogo" className="col-sm-2 col-form-label">Event Logo</label>
                <div className="col-sm-10">
                    <input className="form-control" type="file" id="formFile" value={formData.logo} onChange={handleChange} name="logo"/>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginLeft: "2%", marginRight: "2%"}}>
                <button className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button name="draft" className="btn btn-secondary" onClick={handleSaveDraft} >Save as Draft</button>
                <button type="submit" className="btn btn-primary" onClick={handlePublish}>Publish</button>
            </div>
        </form>
        </main>
    )
}

export default CreateEvent;