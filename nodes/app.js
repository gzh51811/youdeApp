var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');
var classfiyRouter = require('./routes/classfiy');
var goodsDetailRouter = require('./routes/goodsDetail');
var regRouter = require('./routes/reg');
var loginRouter = require('./routes/login');
var cartRouter = require('./routes/cart');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置跨域资源共享
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    next();
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);
app.use('/classfiy', classfiyRouter);
app.use('/goodsDetail', goodsDetailRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/cart', cartRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
