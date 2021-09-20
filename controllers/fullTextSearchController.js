const BlogPost = require("../models/BlogPost");

module.exports = (req, res)=>{
    const query = req.query.data
    BlogPost.find({$or:[{title:{'$regex':query}}, {body:{'$regex':query}}]}, (err, posts)=> {
        res.render('index', {posts: posts});
        console.log(err);
    })}

