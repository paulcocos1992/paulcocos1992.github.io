
var lat ;
var lon ;
var d = new Date ();

document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".6"; 

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

function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}

function emptyPos()
{
	document.getElementById("id_img").src="";
}


function on_battery(b)
{
		document.getElementById("batNu").checked=false;
		document.getElementById("Bat").innerHTML = b.level + " " + b.charging;
}
//------------------------------
function on_battery_error(b)
{
	document.getElementById("batDa").checked=false;
	document.getElementById("Bat").innerHTML="You lose!";
	//alert("Cannot read battery");
}