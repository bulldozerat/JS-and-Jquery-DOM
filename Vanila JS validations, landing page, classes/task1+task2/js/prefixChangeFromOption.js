//chenge prefix val depending on what option is selected
countrySelect.addEventListener('change', changePrefix);

function changePrefix() {
  changeSelect = true;
  var countrySelectVal = countrySelect.selectedIndex;
  var selValue = countrySelect.options[countrySelectVal];
  countryPrefix.value = selValue.getAttribute('data-prefix');
}
