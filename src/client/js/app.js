import {
    retrieveAlldata,
    remove
} from './localstorage'

import {
    newTrip
} from './ui'

import {
    checkExpiredTrip
} from './util'

document.addEventListener('click', (e)=>{
    if(e.target.dataset.action === 'close'){
        // remove from localstorage
        remove(e.target.closest('.new-trip').id)
        
        e.target.closest('.new-trip').style.display = 'none';
    }
});

retrieveAlldata().forEach(trip => { 
    newTrip(trip);
});

checkExpiredTrip();
