import axios from "axios";

const key = process.env.REACT_APP_GOOGLE_API_KEY;

export function getHotels(query) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+${query}&key=${key}`)
    .catch((err) => console.log(err));
}

export function getRestaurants(query) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+${query}&key=${key}`)
    .catch((err) => console.log(err));
}
