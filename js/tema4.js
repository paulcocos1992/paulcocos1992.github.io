
document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.28.";

navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

//#########################################
function on_position_success(e)
{
	 document.getElementById("id_lat").innerHTML = "Latitude =" +e.coords.latitude;
	 document.getElementById("id_long").innerHTML ="Longitude =" +e.coords.longitude;
	 document.getElementById("id_acc").innerHTML ="Accuracy =" +e.coords.accuracy + "m";
	  document.getElementById("id_alt").innerHTML ="Altitude =" +e.coords.altitude + "m";
	
}
//#########################################
function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}