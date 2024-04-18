(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var pokemonMiddleware = require('./pokemon.module')().pokemonMiddleware;

    router.post('/',
        pokemonMiddleware.addPokemon,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        pokemonMiddleware.getPokemons,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:pokemonId',
        pokemonMiddleware.getPokemonById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:pokemonId',
        pokemonMiddleware.modifyPokemon,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:pokemonId',
        pokemonMiddleware.removeUser,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
