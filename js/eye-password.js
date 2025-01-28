//Función para mostrar/ocultar el ojo en el password
document.addEventListener('DOMContentLoaded', function() {
  const passwordField = document.getElementById('password');
  const eyeClosed = document.getElementById('eye-closed');
  const eyeOpen = document.getElementById('eye-open');

  eyeClosed.addEventListener('click', function() {
    passwordField.type = 'text';
    eyeClosed.style.display = 'none';
    eyeOpen.style.display = 'inline';
  });

  eyeOpen.addEventListener('click', function() {
    passwordField.type = 'password';
    eyeOpen.style.display = 'none';
    eyeClosed.style.display = 'inline';
  });
});




//Función para validar formato de correo contraseña

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const form = document.getElementById("registerForm");

  // Validar email
  emailInput.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === "") {
      // Si el campo está vacío, no mostrar mensaje de error
      emailInput.classList.remove("valid", "invalid");
      emailError.textContent = "";
    } else if (emailRegex.test(emailInput.value)) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
      emailError.textContent = "";
    } else {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      emailError.textContent = "Revisa que el correo este escrito correctamente. Ejemplo: correo@dominio.com";
    }
  });

 

// Validar contraseña
passwordInput.addEventListener("input", function () {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (passwordInput.value === "") {
    // Si el campo está vacío, no mostrar mensaje de error
    passwordInput.classList.remove("valid", "invalid");
    passwordError.textContent = "";
  } else if (passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    passwordError.textContent = "";
  } else {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    passwordError.textContent =
     "Al menos 6 caracteres (mayúscula y minúscula y un número)";
  }
});





  // Validación al enviar el formulario
  form.addEventListener("submit", function (e) {
    if (
      !emailInput.classList.contains("valid") ||
      !passwordInput.classList.contains("valid")
    ) {
      e.preventDefault();
      alert("Por favor corrige los errores antes de continuar.");
    }
  });
});
