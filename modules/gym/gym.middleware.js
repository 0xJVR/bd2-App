(function () {
    'use strict';

    module.exports = {
        addGym: addGym,
        getGyms: getGyms,
        getGymById: getGymById,
        modifyGym: modifyGym,
        removeGym: removeGym
    };
   
    var GymService = require('./gym.module')().GymService;

    function addGym(req, res, next) {
        GymService.createGym(req.body)
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

    function getGyms(req, res, next) {

        GymService.fetchGyms()
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

    function getGymById(req, res, next) {

        GymService.fetchGymById(req.params.gymId)
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

    function modifyGym(req, res, next) {
        GymService.updateGym(req.params.gymId, req.body)
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

    function removeGym(req, res, next) {

        GymService.deleteGym(req.params.gymId)
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
