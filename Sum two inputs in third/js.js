function calc() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
       alert('write a number in both inputs please');
    }
    let result = document.getElementById("sum");
    result.value = num1 + num2;
}