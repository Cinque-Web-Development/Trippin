const BASE_URL = 'https://wft-geo-db.p.rapidapi.com'

export function getCity() {
    return fetch(`${BASE_URL}/v1/geo/cities`, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "1a7724c5d7mshb90f93835c89bd3p17b638jsnc23f861df576"
        }
    }, {mode:'cors'})
    .then(res => res.json())
    .catch(err => err.json());
}