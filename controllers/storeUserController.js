const User = require('../models/User');

module.exports = async(req, res)=>{
    try{
        await User.create(req.body);
        res.redirect('/users/login');
    }catch(err){
        console.log(err);
      res.redirect('/users/new');
    }
}
