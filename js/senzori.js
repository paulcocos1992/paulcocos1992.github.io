
window.addEventListener("deviceorientation", on_device_orientantion);


function on_device_orientantion(e)
{
		document.getElementById("id_x").innerHTML = e.beta;
		document.getElementById("id_y").innerHTML = e.gamma;
		document.getElementById("id_z").innerHTML = e.alpha;	
}