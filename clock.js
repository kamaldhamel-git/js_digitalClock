const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampaE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampam = "AM"

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    //this for applying 0 when time is 1 upto 9/
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    /* select grda autai word 
    xa vani autalai select grerw 
    ctrl + D gryo vani aru select grnw sakinxw*/


    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampaE1, (innerText = ampm);
    
    //it is used to call the update function every second
    setTimeout(()=>{
        updateClock()  
    }, 1000)
}

updateClock();