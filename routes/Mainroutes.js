const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();
const multer = require('multer')
const path = require('path')

let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images')
        },
        filename: function(req,file,cb) {
            cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
})

router.get('/', mainController.getMainPage);

router.get('/admin', mainController.getAdmin);

router.post('/admin', upload.single('image'), mainController.postData)

module.exports = router;