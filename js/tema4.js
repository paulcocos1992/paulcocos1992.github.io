var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

var img = document.getElementById("id_img");
img.addEventListener("touchstart", on_touch_start);
img.addEventListener("touchend", on_touch_end);


function on_touch_start(e)
{
	e.preventDefault();
	timer_id = setInterval(start_vibrate, 100);

}

//-----------------------------------------------
function start_vibrate()
{
	window.navigator.vibrate(150);
	
}
//------------------------------------------
function on_touch_end()
{
	e.preventDefault();
	clearInterval(timer_id);
}
//-------------------------------------------
function on_speech_results(e)
{
	document.getElementById("id_speech").innerHTML=e.results[0][0].transcript;
	line(); // functia care traseaza linia
}
//#########################################
function on_position_success(e) // functia care prezinta locatia utilizatorului
{ 
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	  var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=600x500"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  e.coords.latitude  + "," + e.coords.longitude 
	  ;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_explicatie").innerHTML = "Afisarea locatiei utilizatorului.";
	
}