(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            GormitiController: require('./gormiti.controller'),
            GormitiMiddleware: require('./gormiti.middleware'),
            GormitiService: require('./gormiti.service'),
            GormitiModel: require('./gormiti.model')
        }
    }

})();
