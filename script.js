//time and date
var todaysDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDate);

$(document).ready(function () {

$(".saveBtn").on("click", function () {

var taskInput = $(this).siblings(".description").val();

var hour = $(this).parent().attr("id");

localStorage.setItem(taskInput, hour);

})
 
function currentTimeTrack() {

//get current time
    var time = moment().hour();

    $(".time-block").each(function () {
     var currentTime = parseInt($(this).attr("id").split("hour")[1]);
// change color according to time
      if (currentTime < time) {

        
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      else if (timeBlock === time) {

        
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
       
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
    })

}
//load data in local storage

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

currentTimeTrack();
})
