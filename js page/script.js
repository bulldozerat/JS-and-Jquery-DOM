//task1
let continents = {
  Europe: {
    name: "Europe",
    countries: {
      Bulgaria: {
        name: "Bulgaria",
        capital: "Sofia",
        officialLanguage: "Bulgarian",
        population: 7000000,
        area: 111000,
        politicalStatus: "Republic",
        president: "Rumen Radev",
        officialCurrency: "LEV(BGN)"
      },
      Vatican: {
        name: "Vatican",
        capital: "Vatican City",
        officialLanguage: "Italian",
        population: 1000,
        area: 0.44,
        politicalStatus: "Monarchy",
        monarch: "Francis",
        officialCurrency: "Euro(EUR)"
      }
    }
  },
  Asia: {
    name: "Asia",
    countries: {
      Russia: {
        name: "Russia",
        capital: "Moscow",
        officialLanguage: "Russian",
        population: 144463451,
        area: 17075200,
        politicalStatus: "Republic",
        president: "Vladimir Putin",
        officialCurrency: "Russian ruble(RUB)"
      },
      China: {
        name: "China",
        capital: "Beijing",
        officialLanguage: "Chinese",
        population: 1403500365,
        area: 9596961,
        politicalStatus: "Republic",
        president: "Xi Jinping",
        officialCurrency: "Renminbi(CNY)"
      }
    }
  }
};

function renderAllContinents(continents) {
  for (let i in continents) {
    console.log(continents[i]['name']);
  }
}

function renderSingleContinent(continent) {
  console.log(continent['name']);
  console.log('Contries: ');
  for (let country in continent['countries']) {
    console.log('$$$' + country);
  }
}

function renderSingleCountry(country) {
  console.log(country['name']);
  console.log('Capital: ' + country['capital']);
  console.log('Official Language: ' + country['officialLanguage']);
  console.log('Population: ' + country['population']);
  console.log('Area: ' + country['area'] + ' km2');
  console.log('Political Status: ' + country['politicalStatus']);
  if (country['politicalStatus'] == 'Republic') {
    console.log('President: ' + country['president']);
  } else if (country['politicalStatus'] == 'Monarchy') {
    console.log('Monarch: ' + country['monarch']);
  }
  console.log('Official Currency: ' + country['officialCurrency']);
}

//TASK2
let continent = {
  Europe: {
    name: "Europe",
    countries: {
      Bulgaria: {
        name: "Bulgaria",
        capital: "Sofia",
        officialLanguage: "Bulgarian",
        population: 7000000,
        area: 111000,
        politicalStatus: "Republic",
        president: "Rumen Radev",
        officialCurrency: "LEV(BGN)"
      }
    }
  }
};

function renderDataInHTML(continent) {
  console.log(continent);
  for(let continentName in continent) {
    $('.continents').append(`<div class='continent'><h5 class='continent-title'>${continentName}</h5></div>`);
    $('.continent-data').append(`
      <h2 class='continent-title'>${continentName}</h2>
      <h3 class='countries-title'>Countries</h3>
      <div class='countries'>
        <select class='dropdown-select'>
          <option disabled selected value> -- select and option -- </option>
        </select>
      </div>`
    );

    for(let countryName in continent[continentName]['countries']) {
      let countryObj = continent[continentName]['countries'][countryName];
      $('.dropdown-select').append(`<option>${countryName}</option>`);
      $('.continent-country').append(`
      <div class="country-title"><h2>${countryName}</h2></div>
      <div class="country-data">
        <div class="country-capital"><strong>Capital: </strong>${countryObj['capital']}</div>
        <div class="country-official-language"><strong>Official Language: </strong>${countryObj['officialLanguage']}</div>
        <div class="country-population"><strong>Population: </strong>${countryObj['population']}</div>
        <div class="country-area"><strong>Area: </strong>${countryObj['area']} km</div>
        <div class="country-political-status"><strong>Political Status: </strong>${countryObj['politicalStatus']}</div>
        <div class="country-president"><strong>President: </strong>${countryObj['president']}</div>
        <div class="country-official-currency"><strong>Official Currency: </strong>${countryObj['officialCurrency']}</div>
      </div>
    `);
    }

    $('.continent-data').append(`<div class='continent-image'><img src='images/${continentName.toLowerCase()}.png' /></div>`);


  }

}

renderDataInHTML(continent);
