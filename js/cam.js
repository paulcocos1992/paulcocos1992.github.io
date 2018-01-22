var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
//_______________________________________________###____________________________________________
var constraints={audio: true,video: true}; {facingMode: "environment"}};
navigator.mediaDevices.getUserMedia(constraints).then(on_cam).catch(on_error);
var video = document.getElementById("id_video");
video.addEventListener("touchstart", on_touch_video);

//^^^^^^^^^^^^^^^^6
function on_cam(stream)
{
	video.srcObject=stream;
}
//^^^^^^^^^^^^^^^^6
function on_error(e)
{
	alert("ERROR!: cannot connect to camera!");
}
//^^^^^^^^^^^^^^^^6
function on_touch_video(e)
{
  var canvas = document.getElementById("id_img");
var ctx = canvas.getContext("2d");  
ctx.drawImage(video, 0, 0 );
	
	
}