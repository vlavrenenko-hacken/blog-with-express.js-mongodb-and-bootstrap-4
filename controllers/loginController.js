module.exports = (req, res) =>{
    let username = ""
    let password = ""
    const data = req.flash('loginData')[0];
    if(typeof data != "undefined"){
        username = data.username;
        password = data.password;
    }
    const errorsList = [req.flash('loginError')[0]?.error];
    res.render('login', {
        errors:errorsList,
        username:username,
        password:password
    })
}
