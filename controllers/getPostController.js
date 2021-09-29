const BlogPost = require("../models/BlogPost");

module.exports = async(req, res)=>{
    const post = await BlogPost.findById(req.params.id).populate('userid');
    res.render('post', {
        blogPost:post
    })
}
