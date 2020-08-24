import tokenService from './tokenService';
const BASE_URL = "/api/googleplaces";

export function getCity(term) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(term)
    }, {mode:'cors'})
    .then(res => res.json());
}