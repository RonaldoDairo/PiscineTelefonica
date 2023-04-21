var rectangulo=document.getElementById("zona");  
 function mifuncion() {  
  var a=Math.floor(Math.random()*255);  
  var b=Math.floor(Math.random()*255);  
  var c=Math.floor(Math.random()*255);  
  var x=Math.floor(Math.random()*255);  
  var y=Math.floor(Math.random()*255);  
  var z=Math.floor(Math.random()*255);  
  rectangulo.style.backgroundColor='rgb('+a+','+b+','+c+')';  
  rectangulo.style.color='rgb('+x+','+y+','+z+')';  
 }  