(function () {
    'use strict';

    module.exports = {
        createInvizimal: createInvizimal,
        fetchInvizimals: fetchInvizimals,
        fetchInvizimalById: fetchInvizimalById,
        updateInvizimal: updateInvizimal,
        deleteInvizimal: deleteInvizimal
    };

    var InvizimalModel = require('./invizimal.module')().InvizimalModel;

    function createInvizimal(invizimal) {
        return InvizimalModel.create(invizimal);
    }

    function fetchInvizimals() {
        return InvizimalModel.find({})
            .exec();
    }

    function fetchInvizimalById(invizimalId) {
        return InvizimalModel.findById(invizimalId)
            .exec();
    }

    function updateInvizimal(invizimalId, invizimal) {
        return InvizimalModel
            .findByIdAndUpdate(invizimalId, invizimal, {new: true})
            .exec();
    }

    function deleteInvizimal(invizimalId) {
        return InvizimalModel
            .findByIdAndRemove(invizimalId)
            .exec();
    }
})();
