# FEND-Capstone Travel-App
This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user,
and displays weather and an image of the location using information obtained from external APIs.


## Run the application
1. **Pre-requisite** : 
Install [node.js](https://nodejs.org/)

2. clone the project.
```
git clone https://github.com/ahmedIbrahimKenawi/FEND-Capstone---Travel-App.git
```

3. install the dependencies
```
npm install
```
4. Run build for the project using the cmd as follow:
```
npm run build-prod
```

5. Run the server.
```
npm start
```

6. View the URL **http://localhost:8080/** in browser.

7. Run the testing.
```
npm run test.
```

## Extend Options

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
- Incorporate icons into forecast.
- Allow the user to add additional trips.
- Automatically sort additional trips by countdown.
- Move expired trips to bottom/have their style change so it’s clear it’s expired.
