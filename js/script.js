$(document).ready(function(){ 

$(".img1").click(function () {
  let x=prompt("which country flag is this").toUpperCase();
  let pass="password".toUpperCase();
  if (x==='CROATIA'){
      alert("You are correct")
  }
 if (x===pass){
    alert("Croatia, Uruguay, Burkina faso, Switzerland")
}
  else{
      alert("Oops! Try again")
  }
});


$(".img2").click(function () {
   let x= prompt("which country flag is this").toUpperCase();
   let pass="password".toUpperCase();
  if (x==='URUGUAY'){
    alert("You are correct")
}
else if (x===pass){
    alert("Croatia, Uruguay, Burkina faso, Switzerland")
}
else{
    alert("Oops! Try again")
}
});


$(".img3").click(function () {
   let x= prompt("which country flag is this").toUpperCase();
   let pass="password".toUpperCase();
   if (x==='BURKINA FASO'){
    alert("You are correct")
}
else if (x===pass){
    alert("Croatia, Uruguay, Burkina faso, Switzerland")
}
else{
    alert("Oops! Try again")
}
});


$(".img4").click(function () {
  let x=  prompt("which country flag is this").toUpperCase();
  let pass="password".toUpperCase();
if (x==='SWITZERLAND'){
    alert("You are correct")
}
else if (x===pass){
    alert("Croatia, Uruguay, Burkina faso, Switzerland")
}
else{
    alert("Oops! Try again")
}
});


});