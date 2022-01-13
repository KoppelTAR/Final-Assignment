const date = require('../getDate.js');
//const Log = require('../models/GetReqLogger')
const fs = require('fs')
const path = require('path')

//const FilePath = path.join(path.dirname(require.main.filename), 'data', 'GetReqLogger.json')

exports.getMainPage = (request,response)=>{
        let time = date.getDate();

        response.render('index',{CurrentTime: time});
}