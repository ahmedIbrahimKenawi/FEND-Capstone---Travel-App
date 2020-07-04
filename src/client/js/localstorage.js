function store(key, value){
    if(typeof value != 'string'){
        value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}

function get(key){
    return localStorage.getItem(key)
}

function remove(key){
    localStorage.removeItem(key)
}

function retrieveAlldata (){
    let data = []
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if(key.includes('trip-')){
            data.push( JSON.parse(localStorage.getItem(key)))
        }
      }
    return data;
}

export {
    store,
    get,
    retrieveAlldata,
    remove
}