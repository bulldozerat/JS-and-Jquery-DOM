function increment(selector) {
  let btn1 = $('<button class="btn" id="incrementBtn">Increment</button>');
  let btn2 = $('<button class"btn" id="addBtn">Add</button>');
  let textarea = $('<textarea class="counter" disabled="disabled">0</textarea>');
  let ul = $('<ul class="results"></ul>')
  $(selector).append(btn1, btn2, textarea, ul);

  $(btn1).click(function() {
    let textareaVal = textarea.val();
    textarea.html(++textareaVal);
  });

  $(btn2).click(function() {
    $(ul).append('<li>'+ textarea.val() + '</li>');
  });
}

increment("#wrapper");
