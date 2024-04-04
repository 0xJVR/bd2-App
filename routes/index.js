var express = require('express');
var router = express.Router();

var UserService = require('../modules/user/user.module')().UserService;

// GET home page
router.get('/', async function(req, res, next) {
    try {
        const users = await UserService.fetchUsers();
        res.render('pages/index', { users: users });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
