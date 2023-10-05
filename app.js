

function getTimes() {
    let myTime = document.getElementById('time');
    let date = new Date()
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeString = hours + ":" + min + ":" + sec;
    if (hours.toString().length !== 2) {
        timeString = '0' + hours + ":" + min + ":" + sec;
    } else if (min.toString().length !== 2) {
        timeString = hours + ":0" + min + ":" + sec
    } else if (sec.toString().length !== 2) {
        timeString = hours + ":" + min + ":0" + sec
    }
    myTime.textContent = timeString;
}

setInterval(getTimes, 1000)
getTimes();



function getDate() {
    let myDate = document.getElementById('date')
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dateString = `${day+1}.${month+1}.${year}`
    myDate.textContent = dateString
}

getDate()













