const BlogPost = require("../models/BlogPost");
module.exports = async(req, res)=>{
    const counter = req.params.counter;
    const perPage = 4;
    const blogPosts = await BlogPost.find({});
    const totalPosts = blogPosts?blogPosts.length:0;
    const lastPost =  counter * perPage;
    const firstPost = lastPost - 4;

    const filteredPosts = blogPosts.slice(firstPost, lastPost);
    return res.render('index', {posts:filteredPosts, length:totalPosts-4})
}
