var handleClickSubmit = function () {
  const firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    divSuccess = document.getElementById('succesMessage');

  firstName.classList.remove('borderRed');
  lastName.classList.remove('borderRed');
  divSuccess.classList.add('hide');

  if (firstName.value.length == 0) {
    firstName.classList.add('borderRed');

    if (lastName.value.length == 0) {
      lastName.classList.add('borderRed');
    }
    return;
  }
  if (lastName.value.length == 0) {
    lastName.classList.add('borderRed');

    if (firstName.value.length == 0) {
      firstName.classList.add('borderRed');
    }

    return;
  }
  var spanSuccess = document.getElementById('spanFirstName'),
    textFirstName = firstName.value;

  spanSuccess.innerHTML = 'Thank you for contacting us: ' + textFirstName;
  divSuccess.classList.remove('hide');

  console.log(firstName.value);
  console.log(lastName.value);
};
