var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var MongoDBUtil = require('./modules/mongodb/mongodb.module').MongoDBUtil;

var PokemonController = require('./modules/pokemon/pokemon.module')().PokemonController;
var InvizimalController = require('./modules/invizimal/invizimal.module')().InvizimalController;
var GormitiController = require('./modules/gormiti/gormiti.module')().GormitiController;
var indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

MongoDBUtil.init();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('views/static/'));

app.use('/', indexRouter);
app.use('/api/pokemon', PokemonController);
app.use('/api/invizimal', InvizimalController);
app.use('/api/gormiti', GormitiController);


app.get('/api', function (req, res) {
    var pkg = require(path.join(__dirname, 'package.json'));
    res.json({
        name: pkg.name,
        version: pkg.version,
        status: 'up'
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    res.json({
        message: res.locals.message,
        error: res.locals.error
    });
});

module.exports = app;
