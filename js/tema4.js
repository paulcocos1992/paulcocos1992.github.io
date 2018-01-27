var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0";
var img = document.getElementById("id_img");



navigator.getBattery().then(function(battery) {
    
   var time = battery.chargingTime;

   document.querySelector('#chargingTime').textContent = battery.chargingTime;
});