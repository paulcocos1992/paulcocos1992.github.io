var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 




// Vibrate on completion
var pattern = [500, 100, 500];
$(".progress .bar")
    .css({width: "0%"})
    .animate({width: "100%"}, {
        duration: 1000,
        complete: function() {
            if (canVibrate) navigator.vibrate(pattern);
        }
    });