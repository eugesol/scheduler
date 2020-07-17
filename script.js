$(document).ready(function () {

    var now = moment();
    var nowH = parseInt(now.format("H"))
    var time = $(".hour").val()
    var textarea = textarea
    
    if (time === nowH) {
        textarea.addclass("present");
    } else if (time < nowH) {
        textarea.addclass("past");
    } else (time > nowH) {
        textarea.addclass("future");
    };
});

