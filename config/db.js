const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://admin:09111999@cluster0.i9bec.mongodb.net/BlogPosts?retryWrites=true&w=majority');

    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB;
