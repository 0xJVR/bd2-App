(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            InvizimalController: require('./invizimal.controller'),
            InvizimalMiddleware: require('./invizimal.middleware'),
            InvizimalService: require('./invizimal.service'),
            InvizimalModel: require('./invizimal.model')
        }
    }

})();
