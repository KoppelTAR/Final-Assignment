const date = require('../getDate.js');
//const Wish = require('../models/data');
const Data = require('../models/data.js');

//const FilePath = path.join(path.dirname(require.main.filename), 'data', 'GetReqLogger.json')

exports.getMainPage = (request,response)=>{
        Data.fetchData(dataFromFile =>{
                console.log(dataFromFile);
        
                let time = date.getDate();
        
                response.render('index',{CurrentTime: time, myData: dataFromFile[0]});
        })  
}

exports.getAdminPanel = (request,response)=>{

        response.render('admin');
}