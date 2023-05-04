const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const btnEl = document.querySelector(".btn");


function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h -= 12;
        ampm = "PM";
    }
    
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos",x + "px");
    btnEl.style.setProperty("--yPos",y + "px");

})