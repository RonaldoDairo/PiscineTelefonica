var globo = document.getElementById("globo");
var tamano = 200;
var color = 0;
var creciendo = true;
var explotado = false;

globo.addEventListener("click", function() {
  if (tamano < 420 && !explotado) {
    tamano += 10;
    globo.style.width = tamano + "px";
    globo.style.height = tamano + "px";
    cambiarColor();
  } else {
    explotar();
  }
});

globo.addEventListener("mouseenter", function() {
  if (tamano > 200 && !explotado) {
    tamano -= 0;
    globo.style.width = tamano + "px";
    globo.style.height = tamano + "px";
    cambiarColor();
  }
});

globo.addEventListener("mouseleave", function() {
  if (tamano < 420 && !explotado) {
    tamano -= 5;
    globo.style.width = tamano + "px";
    globo.style.height = tamano + "px";
    cambiarColor();
  }
});

function cambiarColor() {
  if (color === 0) {
    globo.style.backgroundColor = "green";
    color = 1;
  } else if (color === 1) {
    globo.style.backgroundColor = "blue";
    color = 2;
  } else if (color === 2) {
    globo.style.backgroundColor = "red";
    color = 0;
  }
}

function explotar() {
  globo.classList.add("explotado");
  explotado = true;
  setTimeout(function() {
    globo.classList.remove("explotado");
    explotado = false;
    tamano = 200;
    color = 0;
    globo.style.width = tamano + "px";
    globo.style.height = tamano + "px";
    globo.style.backgroundColor = "red";
  }, 500);
}