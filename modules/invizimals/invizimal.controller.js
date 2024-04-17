(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var PokemonMiddleware = require('./pokemon.module')().InvizimalMiddleware;

    router.post('/',
        PokemonMiddleware.addPokemon,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        PokemonMiddleware.getPokemons,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:pokemonId',
        PokemonMiddleware.getPokemonById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:pokemonId',
        PokemonMiddleware.modifyPokemon,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:pokemonId',
        PokemonMiddleware.removePokemon,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
