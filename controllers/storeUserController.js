const User = require('../models/User');

module.exports = async(req, res)=>{
    try{
        await User.create(req.body);
        res.redirect('/users/login');
    }catch(error){
        req.session.validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        res.redirect('/users/new');
    }
}

