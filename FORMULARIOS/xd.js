const form = document.getElementById('coolForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name && email) {
        message.textContent = "¡Formulario enviado con éxito!";
        message.style.color = "lightgreen";
        form.reset();
      } else {
        message.textContent = "Por favor, completa todos los campos.";
        message.style.color = "red";
      }
    });