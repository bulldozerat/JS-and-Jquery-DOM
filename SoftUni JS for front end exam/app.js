$(document).ready(function () {
  $.ajax({
    url: 'https://punsh-master.firebaseio.com/data/punshes.json',
    success: function (data) {
      let punshes = data
      renderAllPunshesInHTML(punshes);

      $('.navbar-item').click(function () {
        attachPunshesEvents(punshes, $(this));
      });
    }
  });
});

let navBarItemsWrapper;

function attachPunshesEvents(punshes, clickedItem) {
  $.ajax({
    url: 'https://punsh-master.firebaseio.com/data/punshes.json',
    success: function (data) {
      let punshes = data

      $('.navbar-items').hide();
      let punshName = clickedItem.find('h4').text();
      renderSinglePunshInHTML(punshes, punshName);

      $('.content-heading').click(attachBackEvents);
    }
  });
}

function attachBackEvents(punshes) {
  $('.content').empty();
  $('.navbar-items').show();
}


function renderAllPunshesInHTML(punshes) {
    let navBarItemsWrapper = $('<div class="navbar-items"></div>');

    for(let i in punshes) {
      navBarItemsWrapper.append(`<div class="navbar-item"><h4>${punshes[i]['name']}</h4></div>`);
    }

    $('.navbar').append(navBarItemsWrapper);
}

function renderSinglePunshInHTML(punshes, punshName) {
  let contentWrapper = $('.content');
  for(let i in punshes) {
    let punshObj = punshes[i];

   if(punshName === punshObj['name']){
     appendContentInfo(contentWrapper, punshObj);
    }
  }
}

function appendContentInfo(contentWrapper, punshObj) {
  contentWrapper.append(`
    <div class="content-header">
        <div class="content-heading">${punshObj['name']}</div>
   </div>
  `);

  contentWrapper.append(`
    <div class="punsh-data">
         <div class="punsh-type"><label>Type: </label><h6>${punshObj['type']}</h6></div>
         <div class="punsh-contents"><label>Contents: </label><p>${punshObj['contents']}</p></div>
         <div class="punsh-description"><label>Description: </label><p>${punshObj['description']}</p></div>
     </div>
  `);

  $('.content-heading').css({cursor: 'pointer'});
}
