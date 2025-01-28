  // Variables globales
  var pwd = $('#password');
  var pwd2 = $('#passwordRepeat');
  var validation = $('#validationErrors');
  var progress = $('#passwordProgress');

  var checks = [
    {
      msg: "Al menos 6 caracteres",
      regex: /^.{8,99}$/
    },
    {
      msg: "Al menos 1 minuscula",
      regex: /[a-z]/
    },
    {
      msg: "Al menos 1 mayuscula",
      regex: /[A-Z]/
    },
    {
      msg: "Al menos 1 número",
      regex: /\d/
    },
    {
      msg: "al menos 1 caracter especial (!?/&@.,).",
      regex: /(_|[^\w\d ])/
    }
  ];

  function validatePwd() {
    var errors = [];
    var p = pwd.val();
    
    validation.html("");
    for(var i = 0; i < checks.length; i++){
      if(!p.match(checks[i].regex)){
        errors.push(checks[i].msg);
        validation.append('<li class="validation-rule">'+checks[i].msg+'</div>');
      }
    }
    
    progress.css('width', (checks.length - errors.length) * (100 / checks.length) + '%' );
    updateProgressColor((checks.length - errors.length) * (100 / checks.length));

    if(errors.length > 0){
      markError(pwd);
      markClear(pwd2);
      return;
    }
    markSuccess(pwd);
    
    if(pwd2.val().length == 0){
      markClear(pwd2);
    } else if(pwd.val() === pwd2.val()){
      markSuccess(pwd2);
    } else {
      markError(pwd2);
    }
  }

  function markError(el){
    markClear(el);
    el.parent().addClass('has-error');
  }

  function markSuccess(el){
    markClear(el);
    el.parent().addClass('has-success');
  }

  function markClear(el){
    el.parent().removeClass('has-success');
    el.parent().removeClass('has-error');
  }

  let statu = document.getElementById("passStatus");

  function updateProgressColor(width) {
    var color;
    if (width >= 100) {
      color = '#90BC04';
      statu.innerHTML = "Correcta";
      statu.style.color ='#fff';
    } else if (width >= 60) {
      color = '#FFD72F';
      statu.innerHTML = "";
      statu.style.color ='#fff';
    } else {
      statu.innerHTML = "";
      statu.style.color ='#fff';
      color = '#BC0000';
    }
    progress.css('background-color', color);
  }
  pwd.on('keyup change', validatePwd);

  let statusM = document.getElementById("passStatusM");

  //Especificaciones Contraseña

document.addEventListener('DOMContentLoaded', function() {
  let input = document.getElementById('password');
  let validationElements = [
    { id: 'mayus', regex: /[A-Z]/ },
    { id: 'characters', regex: /^.{8,99}$/ },
    { id: 'minus', regex: /[a-z]/ },
    { id: 'numb', regex: /\d/ },
    { id: 'special-character', regex: /(_|[^\w\d ])/ }
  ];
  let textPass = document.getElementById('textPass');

  function checkAll() {
    let valorInput = input.value;
    let conditions = {};
    
    validationElements.forEach(element => {
      conditions[element.id] = element.regex.test(valorInput);
    });
  
    return conditions;
  }

  input.addEventListener('input', function () {
    let conditions = checkAll();

    validationElements.forEach((element) => {
      let el = document.getElementById(element.id);
      el.classList.toggle('valid-condition', conditions[element.id]);
      el.classList.toggle('invalid-condition', !conditions[element.id]);
      el.style.display = element.regex.test(input.value) ? 'none' : 'inline';
    });

    textPass.style.display = Object.values(conditions).every((val) => val) ? 'none' : 'inline';
  });
  
});

function viewPassword() {
  var passwordInput = document.getElementById('password');
  var passStatus = document.getElementById('pass-status');

  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye'; 
  } else {
    passwordInput.type='password';
    passStatus.className='fa fa-eye-slash';
  }
}

function viewPassword2() {
  var passwordInput2 = document.getElementById('passwordRepeat');
  var passStatus2 = document.getElementById('pass-status2');

  if (passwordInput2.type == 'passwordRepeat'){
    passwordInput2.type='text';
    passStatus2.className='fa fa-eye'; 
  } else {
    passwordInput2.type='passwordRepeat';
    passStatus2.className='fa fa-eye-slash';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  let input = document.getElementById('passwordM');
  let validationElements = [
    { id: 'mayusM', regex: /[A-Z]/ },
    { id: 'charactersM', regex: /^.{8,99}$/ },
    { id: 'minusM', regex: /[a-z]/ },
    { id: 'numbM', regex: /\d/ },
    { id: 'special-characterM', regex: /(_|[^\w\d ])/ }
  ];
  let textPass = document.getElementById('textPassM');

  function checkAll() {
    let valorInput = input.value;
    let conditions = {};
    
    validationElements.forEach(element => {
      conditions[element.id] = element.regex.test(valorInput);
    });
  
    return conditions;
  }

  input.addEventListener('input', function () {
    let conditions = checkAll();

    validationElements.forEach((element) => {
      let el = document.getElementById(element.id);
      el.classList.toggle('valid-conditionModal', conditions[element.id]);
      el.classList.toggle('invalid-conditionModal', !conditions[element.id]);
      el.style.display = element.regex.test(input.value) ? 'none' : 'inline';
    });

    textPass.style.display = Object.values(conditions).every((val) => val) ? 'none' : 'inline';
  });
  
});

  //Función para sugerir contraseña
  document.getElementById("suggestPassword").addEventListener("click", function () {
    var suggestedPassword = generatePassword();
    document.getElementById("password").value = suggestedPassword;

    validatePwd();
    updateProgressColor((checks.length - errors.length) * (100 / checks.length));
  });

  function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = "!@#$%^&*()_-+=<>?/{}~|";
    var allChars = lowercase + uppercase + numbers + specialChars;

    var password = [
      getRandomChar(lowercase),
      getRandomChar(uppercase),
      getRandomChar(numbers),
      getRandomChar(specialChars),
      getRandomChar(allChars),
      getRandomChar(allChars)
    ];

    return password.join("");
  }

  function getRandomChar(charSet) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
  }

  
