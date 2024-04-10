(function () {
    'use strict';

    module.exports = {
        createPokemon: createPokemon,
        fetchPokemons: fetchPokemons,
        fetchPokemonById: fetchPokemonById,
        updatePokemon: updatePokemon,
        deletePokemon: deletePokemon
    };

    var PokemonModel = require('./pokemon.module')().PokemonModel;

    function createPokemon(pokemon) {
        return PokemonModel.create(pokemon);
    }

    function fetchPokemons() {
        return PokemonModel.find({})
            .exec();
    }

    function fetchPokemonById(pokemonId) {
        return PokemonModel.findById(pokemonId)
            .exec();
    }

    function updatePokemon(pokemonId, pokemon) {
        return PokemonModel
            .findByIdAndUpdate(pokemonId, pokemon, {new: true})
            .exec();
    }

    function deletePokemon(pokemonId) {
        return PokemonModel
            .findByIdAndRemove(pokemonId)
            .exec();
    }
})();
