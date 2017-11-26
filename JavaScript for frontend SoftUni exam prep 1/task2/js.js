function renderDataInHTML(location) {
  console.log(location);
  let divContainer = $('<div class=container></div>');
  let divResult = $('<div class=result></div>');
  let divLocation = $(
     `<div class=location>
       <h1 class='location-name'>Location: ${location.name}</h1>
       <div class='location-coordinates'>
         <h2 class="location-longitude">Longitude: ${location.longitude}</h2>
         <h2 class="location-latitude">Latitude: ${location.latitude}</h2>
       </div>
     </div>`
   );

   let divPokemon = $(`<div class='pokemons'></div>`);

   for( let i in location.pokemons) {
     divPokemon.append(`
       <div class='pokemon'>
          <div class='pokemon-title'>${location.pokemons[i].name}</div>
          <div class='pokemon-stats'>
            <div class='pokemon-power'>Power: ${location.pokemons[i].power}pp</div>
            <div class='pokemon-evolved-from'>Evolved from: ${location.pokemons[i].evolvedFrom}</div>
            <div class='pokemon-evolves-to'>Evolves to: ${location.pokemons[i].evolvesTo}</div>
          </div>
       </div>
     `);
   }

  divContainer.append(divResult);
  divResult.append(divLocation);
  divResult.append(divPokemon);
  $('body').append(divContainer);

}

renderDataInHTML({
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
});
