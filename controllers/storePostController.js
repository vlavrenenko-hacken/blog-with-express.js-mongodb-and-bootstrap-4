const path = require("path");
const BlogPost = require("../models/BlogPost");

module.exports = (req, res)=>{
    if (!req.files) {
        res.send("File was not found");
        return;
    }
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await BlogPost.create({...req.body, image: `/img/${image.name}`});
        console.log(path.resolve(__dirname, 'public/img', image.name));
        res.redirect('/');
    })}




