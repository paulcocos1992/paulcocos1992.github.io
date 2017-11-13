
window.addEventListener("deviceorientation", on_device_orientantion);
window.addEventListener("deviceorientation", on_device_motion);
//----------------------------------------
function on_device_orientantion(e)
{
		document.getElementById("id_x").innerHTML = "x=" + e.beta;
		document.getElementById("id_y").innerHTML = "y=" + e.gamma;
		document.getElementById("id_z").innerHTML = "z=" + e.alpha;	
}

function on_device_motion(e)

{
	
	
	
	
}