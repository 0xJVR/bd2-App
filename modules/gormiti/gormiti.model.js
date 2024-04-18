(function () {
    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;

    const GormitiSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
           
        },
        level: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            contentType: String,
        }
    }, { timestamps: true });

    module.exports = mongoose.model('gormiti', GormitiSchema);
})();
