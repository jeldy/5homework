//set current time
var currentDay = $("#currentDay");
var currentHour = moment().format('h')
var now = moment().format("dddd, MMMM Do YYYY");
currentDay.text(now);

var planner = $(".container");

for(var i = 6; i < 24; i++){
        if (i === currentHour){
            moment().isSame('h a')
        }
        else if (i > currentHour) {
            moment().isAfter('h a')
        }
        else {
            
        }
    
    }




