function mensaje() {
 
    alert(" Please, use me... ");
    
   }
   setInterval(mensaje,30000);

function display(val) {
    document.getElementById('result').value += val;
    
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    
    let result=    document.getElementById('result').value = y;
    alert(`Este es el resultado ${result} `)
    console.log(`Este es el resultado ${result} `)
    return y;
   
}
