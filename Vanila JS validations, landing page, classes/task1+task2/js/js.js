//Problem #2: Validation
var submitBtn = document.getElementsByClassName('submit-btn')[0];
var fNameInput = document.getElementById('fNameInput');
var emailInput = document.getElementById('emailInput');
var phoneNumberInput = document.getElementById('phoneNumberInput');
var countrySelect = document.getElementById('countrySelect');
var countryPrefix = document.getElementById('countryPrefix');
var firstOption = document.getElementById('firstOption');
var termsCheckbox = document.getElementById('termsCheckbox');
var changeSelect = false;

submitBtn.addEventListener('click', submitForm);

function submitForm(e) {
  e.preventDefault();
  if (fNameInput.value.trim() != '' && emailInput.value.trim() != '' && phoneNumberInput.value.trim() != '' &&
    countryPrefix.value.trim() != '' && changeSelect == true) {
    //check the full name input
    var fNameVal = fNameInput.value.trim();
    checkFullNameInput(fNameVal);

    //validate Email
    var emailVal = emailInput.value.trim();
    if (validateEmail(emailVal)) {
      //email is ready for database
    } else {
      console.log('Invalid email');
    }

    //validate phone number
    var phoneNumVal = phoneNumberInput.value.trim();
    if (checkIfOnlyNumbers(phoneNumVal) && phoneNumVal.length > 4) {
      if (phoneNumVal[0] == '0') {
        //phone number is ready for database
      } else {
        console.log('The number must start with Zero');
      }
    } else {
      console.log('Invalid phone number or below 5 digits');
    }

    //validate country select
    var countrySelectVal = countrySelect.selectedIndex;
    var selValue = countrySelect.options[countrySelectVal].value;

    if (selValue != 'Country') {
      //get the 2 letter code and send it to the database later
    } else {
      console.log('Please choose a country from the list');
    }

    //validate if the prefix is num
    var countryPrefixVal = countryPrefix.value;
    if (checkIfOnlyNumbers(countryPrefixVal)) {

    } else {
      console.log('Only nubers allowed in country prefix');
      isFormReady = false;
    }

    //check if checkbox is checked
      var termsCheckboxVal = termsCheckbox.checked;
      if(termsCheckboxVal == true) {
        //checkbox is checked
      }else{
        console.log('You need to agree out terms and conditions');
      }

  } else {
    console.log('Something is not filled right or there are empty fields');
  }
}
