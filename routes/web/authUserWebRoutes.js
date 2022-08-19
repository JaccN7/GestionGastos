const express = require('express');
const router = express.Router();

const {renderIndex} = require('../../controllers/authUserController');

router.get('/', renderIndex);

module.exports = {
    routes: router
}