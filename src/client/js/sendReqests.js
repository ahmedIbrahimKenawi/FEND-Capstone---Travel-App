// Get coordinates of location and country name 
// via Geonames-API [http://www.geonames.org/export/web-services.html];
const geonames_userName = 'ahmed_ibrahim';
async function coordinates( loc, userName = geonames_userName){
    const url = `http://api.geonames.org/searchJSON?maxRows=1&q=${loc}&username=${userName}`;
    const response = await fetch( url );
    if(!response.ok){
        throw { message:"ReqError", status:response.status, statusText:response.statusText }
    }    
    const data = await response.json();
    if( data.totalResultsCount == 0 ){
        throw { message:"NO LOCATION FOUNDED" }
    }
    const { name, countryName:country , lat, lng } = data.geonames[0];
    return { name, country , lat, lng };
}



// Get weather by weatherbit-API [https://www.weatherbit.io/api]
const weatherbit_key = '9f79fcd5e8e3424a8bc7a03ed28da052'
async function weatherbit(lat, lng, key = weatherbit_key){
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${key}`;
    const response = await fetch( url );
    if(!response.ok){
        throw { message:"ReqError", status:response.status, statusText:response.statusText }
    }
    const {data} = await response.json();
    return data;
}


// Get info about country by REST-Countries-API [https://restcountries.eu/].
const pixabay_key = "17297449-193f6e9452c510e4db177a05d"
async function pixabay( location, key = pixabay_key ){
    const url = `https://pixabay.com/api/?key=${key}&q=${location}&image_type=photo`
    const response = await fetch( url )
    if(!response.ok){
        throw { message:"ReqError", status:response.status, statusText:response.statusText }
    }
    const data = await response.json();
    if( data.totalHits == 0 ){
        return null;
    }
    return data.hits[0].webformatURL;
}


// Get info about country by REST-Countries-API [https://restcountries.eu/].
async function countryInfo( country ){
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    const response = await fetch( url )
    if(!response.ok){
        throw { message:"ReqError", status:response.status, statusText:response.statusText }
    }
    const [data] = await response.json();
    return {
        name: data.name,
        flag: data.flag,
        currency: data.currencies[0].name,
        language: data.languages[0].name,

    }
}


export {
    coordinates,
    weatherbit,
    pixabay,
    countryInfo
}