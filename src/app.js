const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_prueba_2'
},'single'));
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('./routes/customer'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//run server
app.listen(app.get('port'),()=>{
    console.log('server conectado al puerto:'+app.get('port'));
});