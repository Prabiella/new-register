$(document).ready(function () {
    $('#pincode-input7').pincodeInput({
        hidedigits: false, inputs: 6, placeholders:"0 0 0 0 0 0", complete: function (value, e, errorElement) {

            $("#pincode-callback").html("This is the 'complete' callback firing. Current value: " + value);
    
    // check the code
    if(value!="123456"){
        $(errorElement).html("El código es incorrecto. Debe ser '123456'");
    }else{
        alert('Código correcto');
    }
    
}});

    // show modal once
   $('#modal-enter-pin').on('shown.bs.modal', function (e) {
       $('#pincode-input8').pincodeInput({
          inputs: 4,
          complete: function (text) {
               alert('your code ' + text);
               $('#modal-enter-pin').modal('hide');
           }
       });
        //autofocus
        $('#pincode-input8').pincodeInput().data('plugin_pincodeInput').clear();
        $('#pincode-input8').pincodeInput().data('plugin_pincodeInput').focus();
    });
});