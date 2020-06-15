const mongoose = require("mongoose");
// const user = new mongoose.Schema()
const userCred = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model("userCred", userCred);
