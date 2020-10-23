import tokenService from '../services/tokenService'

const BASE_URL = '/api/trips/'

export function getUserTrips(userId) {
    return fetch(`${BASE_URL}${userId}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function startTrip(formData) {
    return fetch(`${BASE_URL}`, {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify({formData})
    }, {mode:'cors'})
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function updateTrip(tripId, tripData) {
    return fetch(`${BASE_URL}${tripId}`, {
        method:'PUT',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify({tripData})
    }, {mode:'cors'})
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function deleteTrip(tripId) {
    return fetch(`${BASE_URL}${tripId}`, {
        method:'DELETE',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}