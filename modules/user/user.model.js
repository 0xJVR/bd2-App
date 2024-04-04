(function () {
    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true
        },
        userImg: {
            type: Buffer,
            contentType: String,
        }
    }, { timestamps: true });

    module.exports = mongoose.model('users', UserSchema);
})();
