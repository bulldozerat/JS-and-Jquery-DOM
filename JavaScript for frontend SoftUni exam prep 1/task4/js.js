function attachEvents() {
  let resultDiv = $('.result');
  let location = $('.location-input').val();

    $.ajax({
      url: `https://pokemoncodex.firebaseio.com/locations/${location}.json`,
      error: ajaxError,
      success: ajaxSucces
    });

    function ajaxSucces(response) {
      resultDiv.append('<div> Location:' + response['name'] + '</div>');
      resultDiv.append('<div class="display-ib"> Latitude:' + response['latitude'] + '</div>' + '<div class="display-ib"> Longitude:' + response['longitude'] + '</div>')

      if(response['pokemons']) {
        for(let i in response['pokemons']) {
          let pokemonDiv = $('<div class="pokemon-wrapper"></div>');

          resultDiv.append(pokemonDiv);
          let pokemonName = $(`<h1>${response['pokemons'][i]['name']}</h1>`);
          pokemonName.click(accordion);
          pokemonDiv.append(pokemonName);

          let innerPokemonWrapper = $('<div class="inner-pokemon-wrapper"></div>')
          pokemonDiv.append(innerPokemonWrapper);
          let innerInfo = $(`
            <div>Name: ${response['pokemons'][i]['name']}</div>
            <div>Power: ${response['pokemons'][i]['power']}</div>
            <div>Evelved from: ${response['pokemons'][i]['evolvedFrom']}</div>
            <div>Evelves to: ${response['pokemons'][i]['evolvesTo']}</div>
          `);
          innerPokemonWrapper.append(innerInfo);
        }
      }

      console.log(response);
    }

    function accordion() {
      $('.inner-pokemon-wrapper').not($(this).next('.inner-pokemon-wrapper')).slideUp();
     $(this).next('.inner-pokemon-wrapper').slideToggle();
    }

    function ajaxError() {
      $('.result').append('<div class="error">Error loading location</div>');
    }

    return false;
 }
