
const daysP = document.getElementById("day")
const hoursP = document.getElementById("hour")
const minP = document.getElementById("min")
const secP = document.getElementById("sec")


function countdown(){
    const cd =new Date();
    const ny = "1 Jan 2023";
    const nyd = new Date(ny);

    
    let diff = (nyd-cd)/ 1000;

    const days = Math.floor(diff / 60 / 60 / 24  );
    const hours = Math.floor(diff / 60 / 60 )%24;
    const min = Math.floor(diff / 60 )%60;
    const sec = Math.floor(diff)%60;

    daysP.innerHTML = days;
    hoursP.innerHTML = hours;
    minP.innerHTML = min;
    secP.innerHTML = sec;

}

countdown();

setInterval(countdown,1000);




