const express = require('express');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt-nodejs') ;

const cors = require('cors') ; 

const app = express();

const knex = require('knex') ;

const register = require('./controllers/register') ;
const signin = require('./controllers/signin') ;
const profile = require('./controllers/profile') ;
const card = require('./controllers/card') ;
const about = require('./controllers/about') ;
const info = require('./controllers/info') ;

const db = knex({
  client: 'pg' ,
  connection: {
    host : '127.0.0.1' ,
    user : 'postgres' ,
    password : 'ok123zi' ,
    database : 'ruetians'
  }
});

app.use(bodyParser.json());

app.use(cors()) ;


app.get('/' , (req, res) => {res.send(database.users) })

app.post('/signin' , (req, res) => {signin.handleSignin(req, res, db, bcrypt) })

app.post('/register' , (req,res) => {register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id' , (req, res) => { profile.handleProfileGet(req, res, db) }) 

app.get('/card' , (req, res) => { card.handleCardGet(req, res, db) }) 

app.post('/about' , (req, res) => { about.handleAbout(req, res, db) }) 

app.post('/info' , (req, res) => { info.handleInfoGet(req, res, db) }) 


app.listen(3000, ()=>{
	console.log('app is running on port 3000');
})



