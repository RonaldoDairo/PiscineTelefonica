document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
  document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var icono = document.querySelector("#boton-hamburguesa span");
  
    menu.classList.toggle("mostrando");
    icono.classList.toggle("rotar");
  });