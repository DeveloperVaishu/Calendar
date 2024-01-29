let day=document.getElementById("date");
let week=document.getElementById("week");
let month=document.getElementById("month");
let year=document.getElementById("year");

setInterval(calender,1000)

function calender(){
    let ab=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let bc=["January","February","March","April","May","June","July","August","October","November","December"]
    let time=new Date();
    day.innerHTML=time.getDate();
    week.innerHTML=ab[time.getDay()];
    month.innerHTML=bc[time.getMonth()];
    year.innerHTML=time.getFullYear();
}

