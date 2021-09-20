const express = require('express');
const app = express();
const ejs = require('ejs');
const BlogPost = require('./models/BlogPost');
const bodyParser = require('body-parser');
const path = require("path");
const fileUpload = require("express-fileupload")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(fileUpload())




app.get('/', async(req, res)=>{
    const blogPosts = await BlogPost.find({})
    res.render('index', {posts:blogPosts});
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/contact', (req, res)=>{
    res.render('contact');
})
app.get("/post/:id", async(req, res)=>{
    const post = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogPost:post
    })
})

app.get("/posts/new", (req, res)=>{
    res.render('create');
})

app.post('/posts/store', (req, res)=>{
    if (!req.files) {
        res.send("File was not found");
        return;
    }
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'public/img', image.name), async (error) => {
        await BlogPost.create({...req.body, image: `/img/${image.name}`});
        console.log(path.resolve(__dirname, 'public/img', image.name));
        console.log('-------------------------------------------------------------------------------------------');
        res.redirect('/');
    })

})

app.get('/posts/find', (req, res)=>{
    const query = req.query.data
    BlogPost.find({$or:[{title:{'$regex':query}}, {body:{'$regex':query}}]}, (err, posts)=>{
        res.render('index', {posts:posts});
        console.log(err);
    })
})

app.listen(4000, ()=>{
    console.log('The server is running on the PORT 4000')
})
