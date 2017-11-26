function renderData(location) {
  console.log(
    `Location ${location.name}` + '\n' +
    `Longitude: ${location.longitude} Latitude: ${location.latitude}` + '\n'
  );

  if(location.pokemons) {
    console.log('Pokemons: \n');
      for(let i in location.pokemons) {
       console.log(`###Name: ${location.pokemons[i].name} \n###Power: ${location.pokemons[i].power}pp \n###Evolved From: ${location.pokemons[i].evolvedFrom} \n###Evolves To: ${location.pokemons[i].evolvesTo} \n`
      );
     }
  }
}

renderData({
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
});
