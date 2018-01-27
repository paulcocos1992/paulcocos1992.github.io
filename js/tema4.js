var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0";
var img = document.getElementById("id_img");
img.addEventListener("touchstart", on_touch_start);
img.addEventListener("touchend", on_touch_end);



function on_touch_start(e)
{
document.getElementById("id_battery").innerHTML = b.level + " " + b.charging;
}
//------------------------------
function on_touch_end(e)
{
	alert("Cannot read battery");
}