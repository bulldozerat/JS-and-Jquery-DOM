function checkIfOnlyNumbers(checkNum) {
  //again stackoverflow
  isNumeric = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/;
  return isNumeric.test(checkNum);
}

function checkFullNameInput(fNameVal) {
    var fNameArr = fNameVal.split(' ');
    if (fNameArr.length == 2) {
      if(fNameArr[0].length >=3 && fNameArr[1].length >=3 &&
         fNameArr[0].length <=20  && fNameArr[1].length <=20) {
        //get the value of the input
      }else{
        console.log('First and last name need to be from 3 to 20 characters');
      }
    } else {
      console.log('Full name need to have first and last name devided by space.');
    }

}

function validateEmail(emailVal) {
  //copy paste from stackoverflow cant write such thing ever :)
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailVal.toLowerCase());
}
