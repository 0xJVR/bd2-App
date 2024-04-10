(function () {
    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;

    const PokemonSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
            unique: true,
        },
        level: {
            type: Number,
            required: true
        },
        image: {
            type: Buffer,
            contentType: String,
        }
    }, { timestamps: true });

    module.exports = mongoose.model('pokemon', PokemonSchema);
})();
