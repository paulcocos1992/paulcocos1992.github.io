var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 


@media (light-level: normal) {
  p {
    background: url("texture.jpg");
    color: #333;
  }
}

@media (light-level: dim) {
  p {
    background: #222;
    color: #ccc;
  }
}

@media (light-level: washed) {
  p {
    background: white;
    color: black;
    font-size: 2em;
  }
}