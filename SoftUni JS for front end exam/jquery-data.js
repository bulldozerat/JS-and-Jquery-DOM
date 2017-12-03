let punshes = {
    0: {
        name: "Punsh – The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

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
