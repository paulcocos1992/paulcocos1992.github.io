var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 



// Vibration for 50ms on all .button on click
$(".button").vibrate();

// Vibrate for 20ms on click
$(".button").vibrate("short");

// Vibrate for 50ms on click
$(".button").vibrate("medium");
$(".button").vibrate("default");
$(".button").vibrate(50);

// Vibrate for 100ms on click
$(".button").vibrate("long");

// Vibrate for 1000ms on touchstart. Stop vibrating on touchend.
$(".button").vibrate({
    duration: 1000,
    trigger: "touchstart"
});