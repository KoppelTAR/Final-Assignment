const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.getMainPage);
router.use('/admin',mainController.getAdminPanel)

module.exports = router;