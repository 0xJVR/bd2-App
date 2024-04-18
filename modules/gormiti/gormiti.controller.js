(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var GormitiMiddleware = require('./gormiti.module')().GormitiMiddleware;

    router.post('/',
        GormitiMiddleware.addGormiti,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        GormitiMiddleware.getGormitis,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:gormitiId',
        GormitiMiddleware.getGormitiById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:gormitiId',
        GormitiMiddleware.modifyGormiti,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:gormitiId',
        GormitiMiddleware.removeGormiti,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
