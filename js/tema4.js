
var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".4"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

var speech = new webkitSpeechRecognition();
var lat ;
var lon ; 
speech.onresult = on_speech_results;
speech.onspeechend = on_speech_end;
speech.lang="en-US";

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function recognize()
{
	if(speech.start())
	{}//rezolvare eroare incercare multipla de pornire speech recognition
}

//####################################################

function on_speech_end()
{
		speech.stop();
	
}
//####################################################
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
//#########################################
function line(e)
{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=15"+"&size=600x500"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  lat  + "," + lon + 
	  "&path=color:red|" + lat + "," + lon + "|" + document.getElementById("id_speech").innerHTML
	  ;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_explicatie").innerHTML = "Trasarea liniei de conectare intre pozitia curentare si cea recunoscuta";
		
	
}

function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}



var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".2"; 



//navigator.getBattery().then(on_battery).catch(on_battery_error);
//------------------------------
function on_battery(b)
{
	if(document.getElementById("batDa").checked==true)
	{
		document.getElementById("batNu").checked=false;
		document.getElementById("Bat").innerHTML = b.level + " " + b.charging;
	}
	else{document.getElementById("Bat").innerHTML="";}
	
}
//------------------------------
function on_battery_error()
{
	if(document.getElementById("batNu").checked==true)
	{document.getElementById("batDa").checked=false; return;}
	alert("Cannot read battery");
}