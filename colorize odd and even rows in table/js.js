function colorize() {
  let odd = document.querySelectorAll("tr:nth-child(odd) td");
  let even = document.querySelectorAll("tr:nth-child(even) td");
    for (let i = 0; i < even.length; i++) {
              odd[i].style.backgroundColor = 'red';
              even[i].style.backgroundColor = 'blue';
    }

}