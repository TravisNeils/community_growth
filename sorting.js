// const { table } = require("console");

let tbody;
let tableRows;
let lastSortedBy = "";

function date_to_text(element) {
    let utcSeconds = parseInt(element.innerText);
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    element.innerText = d.toDateString()
    return d
}

document.querySelector('html').onclick = function() {
    
}


function editHeaders(element) {
    console.log(element.className);
    element.onclick = function() {
        let colClass = element.className
        
        // console.log(colClass);
        let sortedRows;
        if (colClass == "name"){
            sortedRows = [...tableRows].sort((a, b) => a.querySelector('.' + colClass).innerText.localeCompare(b.querySelector('.' + colClass).innerText));
        } else if(colClass == "start_date") {
            sortedRows = [...tableRows].sort(function(a, b){
                let d1 = new Date(a.querySelector('.' + colClass).innerText);
                let d2 = new Date(b.querySelector('.' + colClass).innerText);
                return (d1>d2)-(d1<d2)})
        } else {
            sortedRows = [...tableRows].sort(function(a, b){return parseInt(a.querySelector('.' + colClass).innerText) - parseInt(b.querySelector('.' + colClass).innerText)});
        }
        // make all arrows visible again
        document.querySelectorAll('.hidden').forEach(span => span.classList.remove('hidden'));
        if (colClass == lastSortedBy){
            sortedRows.reverse();
            lastSortedBy = "";
            element.querySelector('.arrow-up').classList.add('hidden');
        } else {
            lastSortedBy = colClass;
            element.querySelector('.arrow-down').classList.add('hidden');
        }
        
        // sortedRows.forEach(row => console.log(row.querySelector('.' + colClass).innerText))
        sortedRows.forEach(row => tbody.append(row))
    }
}

window.addEventListener("load", function(){
    let table = document.querySelector('table');
    tbody = table.querySelectorAll('tbody')[1]
    tableRows = tbody.querySelectorAll('tr');
    document.querySelectorAll('th').forEach(element => editHeaders(element));
    console.log(tableRows);
    // table.forEach(element => console.log(element))
    let dateList = document.querySelectorAll('td.start_date');
    dateList.forEach(element => date_to_text(element));
});