const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');

//express
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(9030, function () {
    console.log('run localhost:9030')
});