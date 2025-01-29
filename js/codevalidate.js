document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("pincode-input-newregister");
  const spans = document.querySelectorAll(".pincode-visual span");
  const codeError = document.getElementById("codeError");
  const codigoCorrecto = "123456"; // El código correcto para la validación

  // Desactivar el autocompletado y autocorrección
  input.setAttribute("autocomplete", "off");
  input.setAttribute("autocorrect", "off");
  input.setAttribute("autocapitalize", "off");
  input.setAttribute("spellcheck", "false");

  // Escuchar el evento 'input' para actualizar los valores y mostrar el cursor
  input.addEventListener("input", function () {
      const value = input.value.slice(0, 6).replace(/\D/g, ""); // Solo números
      input.value = value;

      // Actualizar cada cuadro visual con el valor del código
      spans.forEach((span, i) => {
          span.textContent = value[i] || "";
          span.classList.toggle("filled", !!value[i]); // Efecto de relleno
          span.classList.remove("active");
      });

      // Si el código tiene menos de 6 caracteres, mostrar el cursor en el siguiente cuadro vacío
      if (value.length < 6) {
          spans[value.length].classList.add("active"); // Cursor en la siguiente casilla vacía
      }

      // Si el código tiene 6 caracteres, realizar la validación
      if (value.length === 6) {
          validarCodigoPIN(value);
      }

      // Ocultar el mensaje de error si se elimina cualquier valor
      if (value.length < 6) {
          codeError.textContent = "";
          codeError.classList.remove("visible"); // Ocultar el mensaje de error si el código es incompleto
      }
  });

  // Función para mostrar el cursor en el cuadro adecuado cuando el input tiene el foco
  input.addEventListener("focus", function () {
      spans.forEach(span => span.classList.remove("active"));
      if (input.value.length < 6) {
          spans[input.value.length].classList.add("active");
      }
  });

  // Eliminar el cursor cuando el input pierde el foco
  input.addEventListener("blur", function () {
      spans.forEach(span => span.classList.remove("active"));
  });

  // Función para validar el código ingresado
  function validarCodigoPIN(value) {
      if (value !== codigoCorrecto) {
          // Si el código es incorrecto, mostrar el mensaje de error
          codeError.textContent = "❌ Código incorrecto. ingresalo nuevamente.";
          codeError.classList.add("visible"); // Añadir la clase 'visible' para mostrar el mensaje
      } else {
          // Si el código es correcto, limpiar el mensaje de error
          codeError.textContent = "";
          codeError.classList.remove("visible"); // Quitar la clase 'visible' para ocultar el mensaje
      }
  }
});
