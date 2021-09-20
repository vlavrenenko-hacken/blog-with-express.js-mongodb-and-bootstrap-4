module.exports = (req, res, next)=>{
        if (req?.body?.title == null || req?.files?.image == null) {
            return res.redirect('/posts/new')
        }
        next()
    }
