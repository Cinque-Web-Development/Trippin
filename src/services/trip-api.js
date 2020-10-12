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

export function startTrip(city) {
    return fetch(`${BASE_URL}`, {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
        body: JSON.stringify({city})
    }, {mode:'cors'})
    .then(res => {
        res.json()
    })
    .catch(err => {
        console.log(err)
    })
}