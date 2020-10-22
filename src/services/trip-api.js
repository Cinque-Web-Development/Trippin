import tokenService from '../services/tokenService'

const BASE_URL = '/api/trips/'

export function getUserTrips(id) {
    return fetch(`${BASE_URL}${id}`)
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

export function deleteTrip(id) {
    return fetch(`${BASE_URL}${id}`, {
        method:'DELETE',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}