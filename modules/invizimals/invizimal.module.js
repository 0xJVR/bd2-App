(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            PokemonController: require('./invizimal.controller'),
            InvizimalMiddleware: require('./pokemon.middleware'),
            PokemonService: require('./pokemon.service'),
            PokemonModel: require('./pokemon.model')
        }
    }

})();
