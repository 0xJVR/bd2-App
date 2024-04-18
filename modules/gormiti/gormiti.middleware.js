(function () {
    'use strict';

    module.exports = {
        addGormiti: addGormiti,
        getGormitis: getGormitis,
        getGormitiById: getGormitiById,
        modifyGormiti: modifyGormiti,
        removeGormiti: removeGormiti
    };
   
    var GormitiService = require('./gormiti.module')().GormitiService;

    function addGormiti(req, res, next) {
        GormitiService.createGormiti(req.body)
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

    function getGormitis(req, res, next) {

        GormitiService.fetchGormitis()
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

    function getGormitiById(req, res, next) {

        GormitiService.fetchGormitiById(req.params.gormitiId)
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

    function modifyGormiti(req, res, next) {
        GormitiService.updateGormiti(req.params.gormitiId, req.body)
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

    function removeGormiti(req, res, next) {

        GormitiService.deleteGormiti(req.params.gormitiId)
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
