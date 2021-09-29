const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res)=>{
    const {username, password} = req.body;
    User.findOne({username:username}, (error, user)=>{
        if(user){
            bcrypt.compare(password, user.password, (error, same)=>{
                if(same){
                    req.session.userId = user._id;
                    res.redirect('/');
                }
                else{
                    req.flash('loginError', {error:'Login is failed. Passwords do not match'});
                    req.flash('loginData', req.body);
                    res.redirect('/users/login')
                }
            })
        }
        else{
            req.flash('loginError', {error:'Login is failed. Usernames do not match'});
            req.flash('loginData', req.body);
            res.redirect('/users/login')
        }
    })
}
