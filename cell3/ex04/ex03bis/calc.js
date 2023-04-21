function mensaje() {
 
    alert(" Please, use me... ");
    
   }
   setInterval(mensaje,3000);
function display(val) {
       $('#result').val(function(i, valActual) {
          return valActual + val;
       });
    }
 
function clearScreen() {
       $('#result').val("");
    }
 
function solve() {
       let x = $('#result').val();
       let y = eval(x);
       let result = $('#result').val(y);
       alert(`Este es el resultado ${result.val()}`);
       console.log(`Este es el resultado ${result.val()}`);
       return y;
    }
