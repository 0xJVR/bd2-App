(function () {
    'use strict';

    module.exports = {
        addInvizimal: addInvizimal,
        getInvizimals: getInvizimals,
        getInvizimalById: getInvizimalById,
        modifyInvizimal: modifyInvizimal,
        removeInvizimal: removeInvizimal
    };
   
    var InvizimalService = require('./invizimal.module')().InvizimalService;

    function addInvizimal(req, res, next) {
        InvizimalService.createInvizimal(req.body)
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

    function getInvizimals(req, res, next) {

        InvizimalService.fetchInvizimals()
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

    function getInvizimalById(req, res, next) {

        InvizimalService.fetchInvizimalById(req.params.invizimalId)
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

    function modifyInvizimal(req, res, next) {
        InvizimalService.updateInvizimal(req.params.invizimalId, req.body)
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

    function removeInvizimal(req, res, next) {

        InvizimalService.deleteInvizimal(req.params.invizimalId)
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
