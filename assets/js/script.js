$(document).ready(function() {
    var hourColor = function() {

        var actualTime = moment().hours();

        $(".time-block").each(function(){
            var rowHour = parseInt($(this).attr("id").split("-")[1])

            if (rowHour<actualTime){
                $(this).addClass("past")
            } else if (rowHour === actualTime){
                $(this).addClass("present")
                $(this).removeClass("past")
            } else {
                $(this).addClass("future")
                $(this).removeClass("past")
                $(this).removeClass("present")
            }
        })
    }

    hourColor();


    $(".saveBtn").on("click", function(){
        var key = $(this).parent().attr("id")
        var value = $(this).siblings(".description").val()

        localStorage.setItem(key, value)
    })

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#currentDay").text(moment().format('LLLL'))


})