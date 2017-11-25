function timer() {
  let timer = $('#timer');
  let startBtn = timer.find('#start-timer');
  let stopBtn = timer.find('#stop-timer');
  let secsNum = Number(timer.find('#seconds').text());
  let minsNum = Number(timer.find('#minutes').text());
  let hoursNum = Number(timer.find('#hours').text());
  let secs = timer.find('#seconds');
  let mins = timer.find('#minutes');
  let hours = timer.find('#hours');
  let inter;

  $(startBtn).click(function() {
    inter =  setInterval(start, 1000);
  });

  $(stopBtn).click(function() {
    clearInterval(inter);
  });

  function start() {
    if(secsNum == 59) {
     minsNum++;
     secsNum = 0;
    }

    secs.text(('0' + secsNum++).slice(-2));

    if(minsNum == 59) {
      minsNum = 0;
      hoursNum++;
    }

   mins.text(('0' + minsNum).slice(-2));

   if(hoursNum > 24) {
     hoursNum = 0;
   }

    hours.text(('0' + hoursNum).slice(-2));

  }
}
