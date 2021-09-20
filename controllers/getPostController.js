const BlogPost = require("../models/BlogPost");

module.exports = async(req, res)=>{
    const post = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogPost:post
    })
}
