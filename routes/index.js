var express = require('express');
var router = express.Router();

var PokemonService = require('../modules/pokemon/pokemon.module')().PokemonService;

// GET home page
router.get('/', async function(req, res, next) {
    try {
        const pokemon = await PokemonService.fetchPokemons();
        res.render('pages/index', { pokemon: pokemon });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
