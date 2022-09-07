// To update current date and time 
var today = new Date();

var date = today.getDate();
var year = today.getFullYear();
var month = (today.getMonth()+1);

var hours = today.getHours();
var mins = today.getMinutes();


// set current date
document.querySelector(".current-date").innerText = date;

// To set month
if(month == 1){
    document.querySelector(".month").innerText = "Jan";
}else if(month == 2){
    document.querySelector(".month").innerText = "Feb";
}else if(month == 3){
    document.querySelector(".month").innerText = "March";
}else if(month == 4){
    document.querySelector(".month").innerText = "April";
}
else if(month == 5){
    document.querySelector(".month").innerText = "May";
}
else if(month == 6){
    document.querySelector(".month").innerText = "June";
}
else if(month == 7){
    document.querySelector(".month").innerText = "July";
}
else if(month == 8){
    document.querySelector(".month").innerText = "Aug";
}
else if(month == 9){
    document.querySelector(".month").innerText = "Sept";
}
else if(month == 10){
    document.querySelector(".month").innerText = "Oct";
}
else if(month == 11){
    document.querySelector(".month").innerText = "Nov";
} 
else{
    document.querySelector(".month").innerText = "Dec";
}

//set current year
document.querySelector(".year").innerText = year;

//set time
document.querySelector(".hours").innerText = hours;
document.querySelector(".mins").innerText = mins;
