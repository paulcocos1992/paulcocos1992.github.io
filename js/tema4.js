var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 




//-------------------------------------------
var img = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

$(".button").on(isMobile ? 'touchstart' : 'mousedown', function(e) {
    navigator.vibrate(Infinity); // Infinity is a number
});

$(".button").on(isMobile ? 'touchend' : 'mouseup', function(e) {
    navigator.vibrate(0);
});