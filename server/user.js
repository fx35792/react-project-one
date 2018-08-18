const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
});

Router.post('/register', function (req, res) {
    console.log(res.body.data);
    const {user, pwd, type} = res.body.data;
});
Router.get('/info', function (req, res) {
    return res.json({code: 1})
});

module.exports = Router;