const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const btnEl = document.querySelector(".btn");
const btnTextEl = document.getElementById("btnText");
const pigEl = document.getElementById("pigImg");
const sliderEl = document.getElementById("slider");
const speedEl = document.getElementById("speed");
const pigAnimation = document.querySelector(".animatePig");

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
        console.log(btnTextEl.style.zIndex);
        // console.log(btnEl.before.style.zIndex);
        
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

btnEl.addEventListener("click", ()=>{
    btnTextEl.style.zIndex = 1;
    if(pigEl.classList.contains("animatePig")){
        pigEl.classList.remove("animatePig");
        btnTextEl.textContent = "Start Pig";
    }
    else{
        pigEl.classList.add("animatePig");
        btnTextEl.textContent = "Stop Pig"
        pigEl.style.animationDuration = (101-sliderEl.value)/3 + "s";
    }

})

speedEl.innerHTML = sliderEl.value;

sliderEl.oninput = function(){
    speedEl.innerHTML = this.value;
   pigEl.style.animationDuration = (101-sliderEl.value)/3   + "s";
}