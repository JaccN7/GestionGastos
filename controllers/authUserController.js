const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const db = require('../config/conexionMongoDB');

const renderIndex = (req, res, next) => {
    res.render('index');
}

module.exports = {
    renderIndex
}