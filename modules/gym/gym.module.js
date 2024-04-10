(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            GymController: require('./gym.controller'),
            GymMiddleware: require('./gym.middleware'),
            GymService: require('./gym.service'),
            GymModel: require('./gym.model')
        }
    }

})();
