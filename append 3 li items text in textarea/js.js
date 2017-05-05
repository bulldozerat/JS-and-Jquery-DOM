function extractText() {
  let textarea = document.getElementById("result");
  let li = document.querySelectorAll("#items li");

  textarea.append(" " + li[0].innerHTML  + "  " + li[1].innerHTML + "  " + li[2].innerHTML);
}