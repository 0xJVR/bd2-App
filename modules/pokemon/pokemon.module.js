(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            PokemonController: require('./pokemon.controller'),
            PokemonMiddleware: require('./pokemon.middleware'),
            PokemonService: require('./pokemon.service'),
            PokemonModel: require('./pokemon.model')
        }
    }

})();
