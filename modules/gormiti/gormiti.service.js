(function () {
    'use strict';

    module.exports = {
        createGormiti: createGormiti,
        fetchGormitis: fetchGormitis,
        fetchGormitiById: fetchGormitiById,
        updateGormiti: updateGormiti,
        deleteGormiti: deleteGormiti
    };

    var GormitiModel = require('./gormiti.module')().GormitiModel;

    function createGormiti(gormiti) {
        return GormitiModel.create(gormiti);
    }

    function fetchGormitis() {
        return GormitiModel.find({})
            .exec();
    }

    function fetchGormitiById(gormitiId) {
        return GormitiModel.findById(gormitiId)
            .exec();
    }

    function updateGormiti(gormitiId, gormiti) {
        return GormitiModel
            .findByIdAndUpdate(gormitiId, gormiti, {new: true})
            .exec();
    }

    function deleteGormiti(gormitiId) {
        return GormitiModel
            .findByIdAndRemove(gormitiId)
            .exec();
    }
})();
