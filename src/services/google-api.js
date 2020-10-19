import axios from "axios";

const key = process.env.REACT_APP_GOOGLE_API_KEY;

export function getHotels(query) {
    return axios.get(`https://sams-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+${query}&key=${key}`)
    .catch((err) => console.log(err));
}

export function getRestaurants(query) {
    return axios.get(`https://sams-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+${query}&key=${key}`)
    .catch((err) => console.log(err));
}

export function getAmenityDetails(id) {
    return axios.get(`https://sams-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${key}`)
    .catch((err) => console.log(err));
}

export function getCityCoords(city) {
    return axios.get(`https://sams-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`)
    .catch((err) => console.log(err));
}