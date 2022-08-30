import React from "react";

function TournamentForm(){

    const handleChange = ({target}) => console.log(target);

    return (
        <div className="modal fade" id="addTournament" tabIndex="-1" aria-labelledby="addTournament" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Tournament</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="tournament_name" className="col-form-label">Tournament Name</label>
                        <input type="text" className="form-control" id="tournamet_name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tournament_date" className="col-form-label">Tournament Date</label>
                        <select className="form-control" id="tournamet_date"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="start_time" className="col-form-label">Start Time</label>
                        <input type="time" className="form-control" id="start_time"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="checkin_time" className="col-form-label">Check-In Time</label>
                        <input type="time" className="form-control" id="checkin_time"/>
                    </div>
                        <div className="mb-3">
                        <label htmlFor="level" className="col-form-label">Level</label>
                        <select className="form-control" id="level"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="col-form-label">Gender</label>
                        <select className="form-control" id="gender"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="format" className="col-form-label">Format</label>
                        <select className="form-control" id="format"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="col-form-label">Type</label>
                        <select className="form-control" id="type"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="team_size" className="col-form-label">Team Size</label>
                        <input type="integer" className="form-control" id="team_size"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subs" className="col-form-label">Subs Allowed</label>
                        <input type="integer" className="form-control" id="subs" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Create</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default TournamentForm;