
(function () {
    'use strict';

    module.exports = {
        createGym: createGym,
        fetchGyms: fetchGyms,
        fetchGymById: fetchGymById,
        updateGym: updateGym,
        deleteGym: deleteGym
    };

    var GymModel = require('./gym.module')().GymModel;

    function createGym(gym) {
        return GymModel.create(gym);
    }

    function fetchGyms() {
        return GymModel.find({})
            .exec();
    }

    function fetchGymById(gymId) {
        return GymModel.findById(gymId)
            .exec();
    }

    function updateGym(gymId, gym) {
        return GymModel
            .findByIdAndUpdate(gymId, gym, {new: true})
            .exec();
    }

    function deleteGym(gymId) {
        return GymModel
            .findByIdAndRemove(gymId)
            .exec();
    }
})();
