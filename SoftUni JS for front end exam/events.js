let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

$(document).ready(function () {
  $('.navbar-item').click(function () {
      attachPunshesEvents(punshes, $(this));
  });
});

function attachPunshesEvents(punshes, clickedItem) {
   $('.navbar-items').hide();
   let punshName = clickedItem.find('h4').text();
   renderSinglePunshInHTML(punshes, punshName);

//second task attakc click event
   $('.content-heading').click(attachBackEvents);
}

function attachBackEvents(punshes) {
  $('.content').empty();
  $('.navbar-items').show();
}

//copied from jquery-data.js
renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh – The American Pie");

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
