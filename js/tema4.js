var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 


var img = document.getElementById("id_img");
navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);