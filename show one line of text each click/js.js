function showText() {
  let span = document.getElementById("text");
  span.style.display = "inline";
  let spanHtml = span.innerHTML;
  span.innerHTML = "";
  span.innerHTML += spanHtml + "<br>Welcome to JavaScript and DOM"
}