const stopBtn = document.querySelector('#startStopBtn')

const resetBtn = document.querySelector('#resetBtn')

let sec = 0;
let min = 0;
let hour = 0
let leadingSeconds = 0;
let leadingMints = 0;
let hours = 0;
function stopWatch(){
    sec ++;
    if(sec /60 === 1){
        sec = 0;
        min ++;
 
    if(min / 60 ===1){
        min = 0;
        hour++
    }
}   
if(sec < 10){
    leadingSeconds = "0" + sec.toString()
} else {
    leadingSeconds = sec;
}
if(min < 10){
    leadingMints = "0" + min.toString()
} else {
    leadingMints = min;
}
if(sec < 10){
  hour = "0" + hour.toString()
} else {
     hours = sec;
}

let displayTimer = document.getElementById('timer').innerText = hours + ":" + leadingMints + ":" + leadingSeconds
}
window.setInterval(stopWatch, 1)
 
