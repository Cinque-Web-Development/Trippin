const BASE_URL = '/api/trips/'

export function getAllTrips() {
    return fetch(`${BASE_URL}`)
    .then(res => {
        return res.json()
    })
    .catch(err => {
        return err.json()
    })
}

export function startTrip(tripInfo) {
    console.log(tripInfo)
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(tripInfo)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        return err.json()
    })
}