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

exports.getAdmin = (request,response)=>{
        Data.fetchData(dataFromFile =>{
        response.render('admin',{myData: dataFromFile[0]});
        })
}

exports.postData = (req, res) => {
        const Sbody = req.body
        const newData = new Data(Sbody.fullName,Sbody.dateOfbirth,Sbody.placeOfresidence,
                Sbody.schools,Sbody.technicalSkills,Sbody.softSkills,req.file.filename)
        newData.saveData()

        res.redirect('/')
    }