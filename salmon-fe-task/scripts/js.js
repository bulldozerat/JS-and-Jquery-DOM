$(document).ready(function(){
  //ajax append heading+text
  $.ajax({
    method: "GET",
    url: "https://techhuddle-3fdcf.firebaseio.com/.json",
    success: function(data) {
      var json = data;
      ajaxSuccess(json);
    }
  });

  function ajaxSuccess(json) {
    var num = 1;
    for(var heading in json ) {
      $('#heading' + num).append('Q:' + heading);
      $('#text' + num).append(json[heading])
      num++;
    }
  }

  //accordion
  var accTab = $('.acc-tab');
  var accText = $('.acc-heading');
  $(accTab).click(function(){
    //remove add green background
    accTab.removeClass('active');
    $(this).addClass('active');

    //change the minus and plus
    $('.plus-minus-icon').text('[-]');
    $(this).find('span').text('[+]');

    //show hide bottom text
    var slideText = $(this).next('.expand-text');
    $('.expand-text').not(slideText).slideUp();
    slideText.slideToggle(400);
  });
});
