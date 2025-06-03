const form = document.getElementById("contactForm");
    const mensajeExito = document.getElementById("mensajeExito");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Simula el envío del formulario (puedes conectar con un backend aquí)
      mensajeExito.style.display = "block";

      // Limpia los campos después de enviar
      form.reset();

      // Oculta el mensaje después de 3 segundos
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 3000);
    });