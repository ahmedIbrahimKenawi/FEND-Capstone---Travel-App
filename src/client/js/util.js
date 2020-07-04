function remainingdays(date){
    const dueDate = new Date(date).setHours(0,0,0,0);
    const dateNow = new Date().setHours(0,0,0,0);
    const day = 86400000;
    return ( dueDate - dateNow ) / day;
}


function getPredictedWeather(remaindDays, weatherData){
    return weatherData[remaindDays] || weatherData[15]
}

function preventDefault(elem, event){
    elem.addEventListener(event, (e)=>e.preventDefault());
    
}

function checkExpiredTrip(){
    document.querySelectorAll('#trip-list .new-trip').forEach(trip => {
        if(new Date(trip.dataset.date).setHours(0,0,0,0) - new Date().setHours(0,0,0,0) < 0){
            document.querySelector('#expired-trip').prepend(trip)
        }
    })
}

export {
    remainingdays,
    getPredictedWeather,
    preventDefault,
    checkExpiredTrip
}
