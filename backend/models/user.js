var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type : String,
        require : true
    },
    lastName:{
        type: String,
    },
    email :{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;