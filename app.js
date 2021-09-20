const express = require('express');
const app = express();
const ejs = require('ejs');
const BlogPost = require('./models/BlogPost');
const bodyParser = require('body-parser');
const path = require("path");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const connectDB = require('./config/db');


const validateMiddleWare = require('./middlewares/validationMiddleWare');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(fileUpload());
app.set('view engine', "ejs");
app.use("/posts/store", validateMiddleWare);


connectDB();

const home = require('./controllers/homeController');
app.get("/", home);

const about = require('./controllers/aboutController');
app.get("/about", about);

const contact = require('./controllers/contactController');
app.get("/contact", contact);

const getPost = require('./controllers/getPostController');
app.get("/post/:id", getPost);

const newPost = require('./controllers/newPostController');
app.get("/posts/new", newPost);

const storePost = require('./controllers/storePostController');
app.post('/posts/store', storePost);


const fullTextSearch = require('./controllers/fullTextSearchController');
app.get('/posts/find', fullTextSearch);

const newUser = require('./controllers/newUserController');
app.get('/users/new', newUser);

const storeUser = require('./controllers/storeUserController');
app.post('/users/store', storeUser);

const loginUser = require('./controllers/loginController');
app.get('/users/login', loginUser);

const loginUserAuthenticate = require('./controllers/loginUserAuthenticateController');
app.post('/users/auth', loginUserAuthenticate);


app.listen(4000, ()=>{
    console.log('The server is running on the PORT 4000');
})
