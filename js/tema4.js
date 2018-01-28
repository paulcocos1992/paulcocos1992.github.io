var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 


var img = document.getElementById("id_img");
navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);