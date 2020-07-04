import {
    coordinates,
    weatherbit,
    pixabay,
    countryInfo
} from './sendReqests';

import {
    remainingdays,
    getPredictedWeather,
    preventDefault,
    checkExpiredTrip
} from './util';

import {
    valid
} from './validateInput';

import {
    newTrip,
    sendAlert
} from './ui';

import {
    store
} from './localstorage'
                    

const tripForm = document.getElementById('trip_form');
const tripBtn = document.getElementById('submit');

preventDefault(tripForm, 'submit')
preventDefault(tripBtn, 'submit')

tripForm.addEventListener('submit', callback);
async function callback (event) {

    if(valid() == false) return;

    tripForm.removeEventListener('submit', callback)

    const location = document.getElementById('location').value;
    const departingDate = document.getElementById('departing-date').dataset.date;
    const endDate = document.getElementById('returning-date').dataset.date;

    try {
        // first, get coordinates of location and country name 
        // via Geonames-API [http://www.geonames.org/export/web-services.html];
        // and get image of location by pixabay-API [https://pixabay.com/api/docs/]
        let [ coords, image ] = await Promise.all([
            coordinates(location),
            pixabay(location)
        ]);


        // then get weather by weatherbit-API [https://www.weatherbit.io/api]
        // and get info about country by REST-Countries-API [https://restcountries.eu/].
        let [ weath, country ] = await Promise.all([
            weatherbit(coords.lat, coords.lng),
            countryInfo(coords.country)
        ]);

        // if no image, use country instead.
        if(image == null) {
            image = await pixabay(coords.country)
        }
    
        const remaingDays = remainingdays(departingDate);

        const predictedWeather = getPredictedWeather(remaingDays, weath);

        const data = {
            departingDate,
            endDate,
            length: Math.round((new Date(endDate) - new Date(departingDate))/ 84600000),
            remaingDays,
            location: coords.name,
            country : country.name,
            flag : country.flag,
            language : country.language,  
            currency : country.currency,  
            image,       
            temp: predictedWeather.temp,
            weatherDes: predictedWeather.weather.description,
            weatherIcon: `https://www.weatherbit.io/static/img/icons/${predictedWeather.weather.icon}.png`,

            // unique  id for localstorage 
            id: 'trip-' + Date.now().toString(16)
        }
        
        // add trip;
        newTrip(data);
        // store trip in localstorage;
        store(data.id, JSON.stringify(data))

        checkExpiredTrip() 
    } catch (e) {
        console.log(e)
        sendAlert(e.message)
    }

    tripForm.addEventListener('submit', callback);
}
