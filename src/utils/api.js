//Declare api url
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

  /**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
 async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

  export async function listEvents(signal){
    const url = `${API_BASE_URL}/events`;
    return await fetchJson(url, {headers, signal}, [])
  }

  export async function createEvent(event, signal){
    const url = `${API_BASE_URL}/events`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({data: event}), 
        signal
    }
    return await fetchJson(url, options);
  }

  export async function addTournament(tournament, signal){
    const url = `${API_BASE_URL}/tournaments/:eventId`;
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({data: tournament}),
      signal
    }
    return await fetchJson(url, options);
  }

  export async function editEvent(event, signal){
    const url = `${API_BASE_URL}/events`;
    const options = {
      method: "PUT", 
      headers,
      body: JSON.stringify({data: event}),
      signal
    }
    return await fetchJson(url, options);
  }

  export async function deleteEvent(event_id, signal){
    const url = `${API_BASE_URL}/events`;
    const options = {
      method: "DELETE",
      headers,
      body: JSON.stringify({data: event_id}),
      signal
    }
    return await fetchJson(url, options)
  }
