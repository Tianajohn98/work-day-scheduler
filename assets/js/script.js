//time and date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);


$(".saveBtn").on("click", function () {

var taskInput = $(this).siblings(".description").val();

var hour = $(this).parent().attr("id");
localStorage.setItem(time, hour);

})
 
function currentTimeTrack () {

//get current time
    var time = moment().hour();
    $(".time-block").each(function (){
     var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
// change color according to time
      if (timeBlock < time) {

        
        $(this).removeClass("present");
        $(this).addClass("past");
        $(this).removeClass("future");
      }
      else if (timeBlock === time){

        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
       
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          (this).addClass("future");
      }
    })


}
