
(function () {
    'use strict';

    module.exports = {
        addPokemon: addPokemon,
        getPokemons: getPokemons,
        getPokemonById: getPokemonById,
        modifyPokemon: modifyPokemon,
        removePokemon: removePokemon
    };
   
    var PokemonService = require('./pokemon.module')().PokemonService;

    function addPokemon(req, res, next) {
        PokemonService.createPokemon(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getPokemons(req, res, next) {

        PokemonService.fetchPokemons()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getPokemonById(req, res, next) {

        PokemonService.fetchPokemonById(req.params.pokemonId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyPokemon(req, res, next) {
        PokemonService.updatePokemon(req.params.pokemonId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removePokemon(req, res, next) {

        PokemonService.deletePokemon(req.params.pokemonId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
