document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.28.0";


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
canvas.adEventListener("touchstart", on_start_touch);

var lista_culori = ["#FF000", "#00FF00", "#0000FF", "#FFF000", "#FF00FF", "#FFFFFF"];



//-----------------------------------------
function on_start_touch(e)
{
	var touches = e.changedTouches;
	for (var i = 0; i < touches.lenght; i ++) {
		context.beginPath();
		context.arc(touches.item(i).pageX, touches.item(i).pageY, 20, 0, 2 * Math.PI);
		context.stroke();
		
	}
}
 
//-----------------------------------------