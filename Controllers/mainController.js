const date = require('../getDate.js');
const passport = require('passport');
const User = require('../models/user');
const Data = require('../models/data.js');

//const FilePath = path.join(path.dirname(require.main.filename), 'data', 'GetReqLogger.json')

exports.getMainPage = (request,response)=>{
        Data.fetchData(dataFromFile =>{
                console.log(dataFromFile);
        
                let time = date.getDate();
        
                response.render('index',{CurrentTime: time, myData: dataFromFile[0]});
        })  
}

exports.getRegisterPage = (req, res) => {
        res.render('register');
    
};


exports.postRegister = (req, res) => {
        User.register({username: req.body.username}, req.body.password, (error, user) => {
            if (error) {
                console.log(error);
                res.redirect('/register')
            } else {
                passport.authenticate('local')(req, res, ()=> {
                    res.render('login');
                });
            }
        });
};
    
exports.getLoginPage = (req, res) => {
        res.render('login');
};
    
exports.postLogin = (req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        req.logIn(user, (error) => {
            if (error) {
                console.log(error);
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, ()=> {
                    res.redirect('/admin');
                });
            }
        });
};
    
exports.getSecretsPage =(req, res) => {
        if (req.isAuthenticated()) {
        Data.fetchData(dataFromFile =>{
                res.render('admin',{myData: dataFromFile[0]});
                })
        } else {
            res.redirect('Login');
        }
};
    
exports.userLogout=(req, res)=> {
        req.logout();
        res.redirect('/');
};

/*exports.getAdmin = (request,response)=>{
        Data.fetchData(dataFromFile =>{
        response.render('admin',{myData: dataFromFile[0]});
        })
}*/

exports.postData = (req, res) => {
        const Sbody = req.body
        const newData = new Data(Sbody.fullName,Sbody.dateOfbirth,Sbody.placeOfresidence,
                Sbody.schools,Sbody.technicalSkills,Sbody.softSkills,req.file.filename)
        newData.saveData()

        res.redirect('/')
};