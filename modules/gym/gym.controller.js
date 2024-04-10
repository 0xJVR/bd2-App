(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var GymMiddleware = require('./gym.module')().GymMiddleware;


    router.post('/',
        GymMiddleware.addGym,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        GymMiddleware.getGyms,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:gymId',
        GymMiddleware.getGymById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:gymId',
        GymMiddleware.modifyGym,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:gymId',
        GymMiddleware.removeGym,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
