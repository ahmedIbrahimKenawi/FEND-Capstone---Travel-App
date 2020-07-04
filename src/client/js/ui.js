function newTrip (data){
    document.querySelector('#trip-list').insertAdjacentHTML('beforeend', `
    <div class="new-trip" id='${data.id}' data-date='${data.departingDate}' style='order:${data.remaingDays}'>
    <div class='trip-header'>
      <img alt='flag' src="${data.flag}">
      <span>${data.location}</span>
      <button data-action="close" >X</button>
    </div>
    <div>
      <img id='destination-img' src="${data.image}">
    </div>
    
    <table>
    <tr>
        <td>Date</td>
        <td>${data.departingDate}<br>
            ${data.endDate}<br>
            for ${data.length} day</td>
      </tr>
      <tr>
        <td>Weather</td>
        <td><div class='trip-weather'><span>${data.temp}'c, ${data.weatherDes}</span><img alt='weatherIcon' src="${data.weatherIcon}"></div></td>
      </tr>
      <tr>
        <td>Country</td>
        <td>${data.country}</td>
      </tr>
      <tr>
        <td>Currency</td>
        <td>${data.currency}</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>${data.language}</td>
      </tr>
    </table>
    </div>
    `);
}


function sendAlert(message){
    document.querySelector('#message').innerHTML = `
    <div id="alert">
       <p>${message}</p>      
    </div>`;

    setTimeout(()=>{
        document.querySelector('#message').innerHTML = ''
    },1500)
}

export {
    newTrip,
    sendAlert
}