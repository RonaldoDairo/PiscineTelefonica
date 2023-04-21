$(document).ready(function() {
  let globo = $('#globo');
  let tamano = 200;
  let color = 0;
  let explotado = false;

  globo.on("click", function() {
    if (tamano < 420 && !explotado) {
      tamano += 10;
      globo.css({
        'width': tamano + 'px',
        'height': tamano + 'px'
      });
      cambiarColor();
    } else {
      explotar();
    }
  });

  globo.on("mouseenter", function() {
    if (tamano > 200 && !explotado) {
      tamano -= 5;
      globo.css({
        'width': tamano + 'px',
        'height': tamano + 'px'
      });
      cambiarColor();
    }
  });

  globo.on("mouseleave", function() {
    if (tamano < 420 && !explotado) {
      tamano += 5;
      globo.css({
        'width': tamano + 'px',
        'height': tamano + 'px'
      });
      cambiarColor();
    }
  });

  function cambiarColor() {
    if (color === 0) {
      globo.css('background-color', 'green');
      color = 1;
    } else if (color === 1) {
      globo.css('background-color', 'blue');
      color = 2;
    } else if (color === 2) {
      globo.css('background-color', 'red');
      color = 0;
    }
  }

  function explotar() {
    globo.addClass("explotado");
    explotado = true;
    setTimeout(function() {
      globo.removeClass("explotado");
      explotado = false;
      tamano = 200;
      color = 0;
      globo.css({
        'width': tamano + 'px',
        'height': tamano + 'px',
        'background-color': 'red'
      });
    }, 500);
  }
});
