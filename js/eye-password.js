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
  const emailLabel = document.querySelector("label[for='email']");
  const passwordLabel = document.querySelector("label[for='password']");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const form = document.getElementById("registerForm");

  // Validar email
  emailInput.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === "") {
      emailInput.classList.remove("valid", "invalid");
      emailLabel.classList.remove("valid-label");
      emailError.textContent = "";
    } else if (emailRegex.test(emailInput.value)) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
      emailLabel.classList.add("valid-label");
      emailError.textContent = "";
    } else {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      emailLabel.classList.remove("valid-label");
      emailError.textContent = "Revisa que el correo esté escrito correctamente. Ejemplo: correo@dominio.com";
    }
  });

  // Validar contraseña
  passwordInput.addEventListener("input", function () {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (passwordInput.value === "") {
      passwordInput.classList.remove("valid", "invalid");
      passwordLabel.classList.remove("valid-label");
      passwordError.textContent = "";
    } else if (passwordRegex.test(passwordInput.value)) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      passwordLabel.classList.add("valid-label");
      passwordError.textContent = "";
    } else {
      passwordInput.classList.add("invalid");
      passwordInput.classList.remove("valid");
      passwordLabel.classList.remove("valid-label");
      passwordError.textContent =
        "La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula y un número.";
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
