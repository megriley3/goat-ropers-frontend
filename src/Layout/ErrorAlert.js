import React from "react";

/**
 * Defines the alert message to render if the specified error is truthy.
 * @param error
 *  an instance of an object with `.message` property as a string, typically an Error instance.
 * @returns {JSX.Element}
 *  a bootstrap danger alert that contains the message string.
 */

function ErrorAlert({ error }) {
  //console.log(error.message)
  if(error && (error.message === "Failed to fetch" || error.status>=500)){
    return (
      <div className="alert alert-danger m-2">
        <p>This G.O.A.T. has fainted. Try to rope it later.</p>
        <div style={{display: "block", width: "50%", height: "0", marginLeft: "auto", marginRight: "auto", paddingBottom: "50%", position: "relative"}}><iframe src="https://giphy.com/embed/OIzAkcHOO01KU" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/falling-goat-fainting-OIzAkcHOO01KU">via GIPHY</a></p>
      </div> 
    )
  }
  return (
    error && (
      <div className="alert alert-danger m-2">Error: {error.message}</div>
    )
  );
}

export default ErrorAlert;

