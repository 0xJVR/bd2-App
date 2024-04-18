var express = require('express');
var router = express.Router();

var PokemonService = require('../modules/pokemon/pokemon.module')().PokemonService;
var InvizimalService = require('../modules/invizimal/invizimal.module')().InvizimalService;
var GormitiService = require('../modules/gormiti/gormiti.module')().GormitiService;

// GET home page
router.get('/', async function(req, res, next) {
    try {
        const pokemon = await PokemonService.fetchPokemons();
        res.render('pages/index', { pokemon: pokemon });
    } catch (error) {
        next(error);
    }
});

router.get('/pokemon/', async function(req, res, next) {
    try {
        const pokemon = await PokemonService.fetchPokemons();
        res.render('pages/pokemon', { pokemon: pokemon });
    } catch (error) {
        next(error);
    }
});

router.get('/invizimal/', async function(req, res, next) {
    try {
        const invizimal = await InvizimalService.fetchInvizimals();
        res.render('pages/invizimal', { invizimal: invizimal });
    } catch (error) {
        next(error);
    }
});

router.get('/gormiti/', async function(req, res, next) {
    try {
        const gormiti = await GormitiService.fetchGormitis();
        res.render('pages/gormiti', { gormiti: gormiti });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
