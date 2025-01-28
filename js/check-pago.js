document.addEventListener("DOMContentLoaded", function () {
    // Función para ocultar todos los divs
    function ocultarTodosLosDivs() {
        document.getElementById('divEfectivo').style.display = 'none';
        document.getElementById('divTDD').style.display = 'none';
        document.getElementById('divPaypal').style.display = 'none';
        document.getElementById('divTelmex').style.display = 'none';
        document.getElementById('divDish').style.display = 'none';

    }

    // Obten todos los elementos de tipo radio con el nombre 'opciones'
    var radios = document.getElementsByName('opciones');

    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function () {
            // Primero oculta todos los divs
            ocultarTodosLosDivs();

            // Luego muestra el div correspondiente al radio seleccionado
            if (this.id === 'radio1') {
                document.getElementById('divEfectivo').style.display = 'block';
            } else if (this.id === 'radio2') {
                document.getElementById('divTDD').style.display = 'block';
            } else if (this.id === 'radio3') {
                document.getElementById('divPaypal').style.display = 'block';
            } else if (this.id === 'radio4') {
                document.getElementById('divTelmex').style.display = 'block';
            } else if (this.id === 'radio5') {
                document.getElementById('divDish').style.display = 'block';
            }
        });
    }
});



        
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los checkboxes con la clase 'check-pago'
    var checkboxes = document.querySelectorAll('.check-pago');

    // Selecciona el div '.formas-pago-card'
    var formasPagoCard = document.querySelector('.formas-pago-card');

    function adjustFormasPagoCard() {
        // Verifica si algún checkbox está marcado
        var isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        // Cambia la opacidad y el estado de habilitación
        formasPagoCard.style.opacity = isAnyChecked ? "1" : "0.5";
        var inputs = formasPagoCard.querySelectorAll('input, button, select, textarea');
        inputs.forEach(input => input.disabled = !isAnyChecked);
    }

    // Agrega un evento 'change' a cada checkbox
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', adjustFormasPagoCard));

    // Inicializa el estado del div
    adjustFormasPagoCard();
});