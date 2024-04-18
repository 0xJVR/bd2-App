(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var InvizimalMiddleware = require('./invizimal.module')().InvizimalMiddleware;

    router.post('/',
        InvizimalMiddleware.addInvizimal,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        InvizimalMiddleware.getInvizimals,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:invizimalId',
        InvizimalMiddleware.getInvizimalById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:invizimalId',
        InvizimalMiddleware.modifyInvizimal,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:invizimalId',
        InvizimalMiddleware.removeInvizimal,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
