require('dotenv').config();
const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const session = require('express-session');
const app = express();
const passport = require('passport');


require('./models/db') // connect to db
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true})) //get data from req body
app.use(express.static('public'));
app.use(express.static('images'));


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(mainRoutes);


port = 3000;
app.listen(port,()=> {
    console.log(`Server is running on port ${port}.`);
})