const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.getMainPage);

router.get('/admin', mainController.getAdmin);

router.post('/admin', mainController.postData)

module.exports = router;