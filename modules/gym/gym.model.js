(function () {

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const GymSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
            
        },
        place: {
            type: String,
            required: true,
            unique: true
        },
        bossname:{
            type: String,
            required: true,
            unique:true
        },
        image: {
            type: Buffer,
            contentType: String,
        }
    }, { timestamps: true });

    module.exports = mongoose.model('gym', GymSchema);
})();
