const BlogPost = require("../models/BlogPost");

global.counter = 1;

module.exports=async(req, res)=>{1
    global.counter=1;
    const blogPosts = await BlogPost.find({});
    const totalPosts = blogPosts?blogPosts.length:0;
    const filteredPosts = blogPosts.slice(0, 4);

    res.render('index', {posts:filteredPosts, length:totalPosts});
}
