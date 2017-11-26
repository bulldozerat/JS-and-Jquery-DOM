function attachEvents() {
  $('button').click(function () {
     let input = $('.location-input');
     $('.result').append('<div>' + input.val() + '</div>');
     input.val(' ');
     return false;
  });
}

attachEvents();
