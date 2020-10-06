

const key = process.env.REACT_APP_GOOGLE_API_KEY;

export function getHotels(query) {
    return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+${query}&key=${key}`, {mode:'cors'})
    .then(res => res.json())
    .catch(err => console.log(err))
}

