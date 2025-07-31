document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reserva-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombres').value.trim();
    const cantidad = parseInt(document.getElementById('cantidades').value);
    const tipo = document.getElementById('tipos').value;
    const codigo = document.getElementById('codigos').value.trim();
    const mensaje = document.getElementById('mensaje');

    
    mensaje.textContent = '';
    mensaje.className = 'alerta';

    if (nombre.length<3) {
      mensaje.textContent = '⚠️ El nombre no puede ser corto.';
      mensaje.classList.add('error');
      return;
    }

    if (isNaN(cantidad) || cantidad < 1) {
      mensaje.textContent = '⚠️ La cantidad debe ser un número mayor a 0.';
      mensaje.classList.add('error');
      return;
    }

    if (!tipo) {
      mensaje.textContent = '⚠️ Debes seleccionar un tipo de entrada.';
      mensaje.classList.add('error');
      return;
    }

    
    const precios = {
      general: 1000,
      vip: 2000,
      platino: 3000
    };

    let total = precios[tipo] * cantidad;

    
    if (codigo.toUpperCase() === 'ROCK10') {
      total *= 0.9;
    }

    mensaje.innerHTML = `✅ Reserva confirmada, ${nombre}!<br>Total a pagar: <strong>$${total.toFixed(2)}</strong>`;
    mensaje.classList.add('ok');
  });
});
