const today = new Date();
const thisDay = today.getDate()
const thisMonth = today.getMonth() + 1;
const thisYear = today.getFullYear();

const months = [
    [1,"January"],
    [2,"February"],
    [3,"March"],
    [4,"April"],
    [5,"May"],
    [6,"June"],
    [7,"July"],
    [8,"August"],
    [9,"September"],
    [10,"October"],
    [11,"November"],
    [12,"December"]
];
        
const datePickers = document.querySelectorAll('.my-date-picker');

datePickers.forEach( elem=>{
    const icon = String.fromCodePoint(128197);
    let previousDay = null;

    const yearInput = createYearsInput();
    const monthInput = createMonthsInput();
    let calender = createCalendar(thisYear, thisMonth);

    let card = document.createElement('div');
    card.classList.add('date-picker-card');

    let selectYear_Month = document.createElement('div');
    selectYear_Month.classList.add('date-picker-select-y-m');
    selectYear_Month.append(monthInput, yearInput);

    card.append(selectYear_Month, calender )

    elem.appendChild(card)

    let input = elem.querySelector('input');
    input.setAttribute("readonly", true)
    input.placeholder = ` ${icon}  ${input.name}`
    input.dataset.date = `${months[monthInput.value-1][1]} ${thisDay}, ${yearInput.value}`

    elem.addEventListener('change', (e)=>{
        let y = yearInput.value;
        if(y.trim() === ''){
            y = yearInput.value = thisYear;
        }
        let m = monthInput.value;
        let newCalender = createCalendar(y, m);
        card.replaceChild( newCalender ,calender);
        calender = newCalender;
        input.value = ` ${icon}  ${months[monthInput.value-1][1]} 1, ${yearInput.value}`
        input.dataset.date = `${months[monthInput.value-1][1]} 1, ${yearInput.value}`

        let firstDayofMonth = elem.querySelector('table td:not(.blank)');
        if(y != thisYear || m != thisMonth){
            firstDayofMonth.classList.add('date-picker-selected-day');
                previousDay = firstDayofMonth
            } 
    })

            
    elem.addEventListener('click', (e)=>{
        let target = e.target

        if(target.nodeName === 'TD' && !target.classList.contains('blank')){
            if(previousDay) previousDay.classList.remove('date-picker-selected-day')
            target.classList.add('date-picker-selected-day')
            previousDay = target;
            let selectedDay = target.textContent; 
            input.value = ` ${icon}  ${months[monthInput.value-1][1]} ${selectedDay}, ${yearInput.value}`
            input.dataset.date = `${months[monthInput.value-1][1]} ${selectedDay}, ${yearInput.value}`
        }

        if(target.nodeName === 'INPUT' && target.parentElement.classList.contains('my-date-picker')){
            let thisCard = elem.querySelector('.date-picker-card');
            thisCard.classList.toggle('show_my_date_picker')
                   
            let otherCards = document.querySelectorAll('.my-date-picker .date-picker-card')
            otherCards.forEach( card =>{
                if(card !== thisCard){
                    card.classList.remove('show_my_date_picker')
                } 
            })
        }
    })            
})

document.addEventListener('click', (e)=>{
    if(!e.target.closest('.my-date-picker')){
        document.querySelectorAll('.my-date-picker .date-picker-card').forEach(card=>{
            card.classList.remove('show_my_date_picker')
        })
    }
})

function createMonthsInput(){
    let options = "";

    months.forEach(month=>{
        let selected = month[0] == thisMonth ? 'selected': ''; 
        options += `<option value=${month[0]} ${selected}>${month[1]}</option>`
    })
        
    const list = document.createElement('select');
    list.name = 'month';
    list.classList.add('date-picker-month');
    list.innerHTML = options

    return list;            
}

        
function createYearsInput(){
    let yearInput = document.createElement('input');
    yearInput.classList.add("date-picker-year");
    yearInput.type = "number";
    yearInput.name = "year";
    yearInput.value = thisYear
    yearInput.min = thisYear
    yearInput.max = thisYear + 100

    return yearInput
}

        
function createCalendar(year, month) {
    const  getDay = (date) => date.getDay();
    let selectedDay = null;
    if( thisYear == year && thisMonth == month){
        selectedDay = thisDay
    }

    month = month - 1
    let d = new Date(year, month);

    let table = '<tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td class="blank"></td>';
    }

    while (d.getMonth() == month) {
        let numberOfDay = d.getDate();
        let className = selectedDay == numberOfDay ? 'class="date-picker-today"': '';
        table += '<td '+ className +'>' + numberOfDay + '</td>';
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td class="blank"></td>';
        }
    }

    table += '</tr>';

    let calender = document.createElement('table')
    calender.innerHTML = table;

    return calender;
}