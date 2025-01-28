$('#Numtarjeta').on('keyup', function(e){
  var val = $(this).val();
  var newval = '';
  val = val.replace(/\s/g, '');
  for(var i=0; i < val.length; i++) {
      if(i%4 == 0 && i > 0) newval = newval.concat(' ');
      newval = newval.concat(val[i]);
  }
  $(this).val(newval);
});


// Script para el funcionamiento de la herramienta de fecha de expiración
const monthInput = document.querySelector('#mes');
const yearInput = document.querySelector('#ano');

const focusSibling = function(target, direction, callback) {
  const nextTarget = target[direction];
  nextTarget && nextTarget.focus();
  // if callback is supplied we return the sibling target which has focus
  callback && callback(nextTarget);
}

// input event only fires if there is space in the input for entry. 
// If an input of x length has x characters, keyboard press will not fire this input event.
monthInput.addEventListener('input', (event) => {

  const value = event.target.value.toString();
  // adds 0 to month user input like 9 -> 09
  if (value.length === 1 && value > 1) {
      event.target.value = "0" + value;
  }
  // bounds
  if (value === "00") {
      event.target.value = "01";
  } else if (value > 12) {
      event.target.value = "12";
  }
  // if we have a filled input we jump to the year input
  2 <= event.target.value.length && focusSibling(event.target, "nextElementSibling");
  event.stopImmediatePropagation();
});

yearInput.addEventListener('keydown', (event) => {
  // if the year is empty jump to the month input
  if (event.key === "Backspace" && event.target.selectionStart === 0) {
    focusSibling(event.target, "previousElementSibling");
    event.stopImmediatePropagation();
  }
});


