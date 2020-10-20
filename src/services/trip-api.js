import tokenService from '../services/tokenService'

const BASE_URL = '/api/trips/'

export function getAllTrips() {
    return fetch(`${BASE_URL}`)
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export function startTrip(formData) {
    return fetch(`${BASE_URL}`, {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify({formData})
    }, {mode:'cors'})
    .then(res => {
        res.json()
    })
    .catch(err => {
        console.log(err)
    })
}