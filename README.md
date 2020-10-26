# Trippin
### Trippin is a full stack web application built with MongoDB, Express, React, and Node. Users can search for locations using the Google Maps API, view hotels and restaurants, and create trips.

## Getting Started
1. [Visit the deployed app](https://trippin-cwd.herokuapp.com/)
2. Create an account
3. Search for cities to visit
4. Create a trip

## Future Improvements
- [ ] Add amenities to user trips
- [ ] Add additional amenities to city details page, such as parks and museums
- [ ] Create trip detail page to view all details of trip
- [ ] Add additional search feature to allow users to search for specific amenities, such as hotels

## Instructions For Contributing to This Repo:
#### 1.  Clone this repository to your local machine.
```
git clone https://github.com/samueltrahan/Trippin.git
```
#### 2.  Navigate into the repository and install node modules.
```
cd Trippin
npm i
```
#### 3.  Sign up for a [Google API key](https://console.developers.google.com/). Set the API restrictions to restrict key and select the Google Places API.
#### 4.  Create a .env file and add a value for the API key
```
touch .env
```
```
REACT_APP_GOOGLE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
```