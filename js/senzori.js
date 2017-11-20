document.getElementById("id_business_version").innerHTML = "Business version" 

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);
//-----------------------------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML = + Math.round(e.alpha * 100) / 100; 
	document.getElementById("id_x").innerHTML = + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_y").innerHTML = + Math.round(e.alpha * 100) / 100;
}
//-----------------------------------------------------
function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML = "acc_x=" + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_acc_y").innerHTML = "acc_y=" + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_acc_z").innerHTML = "acc_z=" + Math.round(e.alpha * 100) / 100;

	document.getElementById("id_acc_g_x").innerHTML = "acc_g_x=" + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_acc_g_y").innerHTML = "acc_g_y=" + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_acc_g_z").innerHTML = "acc_g_z=" + Math.round(e.alpha * 100) / 100;
}
//-----------------------------------------------------