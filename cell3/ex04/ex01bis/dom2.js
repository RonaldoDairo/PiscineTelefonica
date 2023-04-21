

let rectangulo=$("#zona");  
function mifuncion() {  
    let a=Math.floor(Math.random()*255);  
    let b=Math.floor(Math.random()*255);  
    let c=Math.floor(Math.random()*255);  
    let x=Math.floor(Math.random()*255);  
    let y=Math.floor(Math.random()*255);  
    let z=Math.floor(Math.random()*255);  
    rectangulo.css('background-color','rgb('+a+','+b+','+c+')');  
    rectangulo.css('color', 'rgb('+x+','+y+','+z+')');    
 }  
//another form to do it 
 /*$(document).ready(function() {  
    let rectangulo = $("#zona");
    function mifunction() {
        
        let a=Math.floor(Math.random()*255);  
        let b=Math.floor(Math.random()*255);  
        let c=Math.floor(Math.random()*255);  
        let x=Math.floor(Math.random()*255);  
        let y=Math.floor(Math.random()*255);  
        let z=Math.floor(Math.random()*255);  
    
        rectangulo.css('background-color','rgb('+a+','+b+','+c+')');  
        rectangulo.css('color', 'rgb('+x+','+y+','+z+')');  
    
    }
    rectangulo.click(mifunction)
     
    });*/