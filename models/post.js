const mongoose = require('mongoose');
const postSchema=new mongoose.Schema({
title:{
    type:String,
    required:"Title is required ya m3rs",
    minLength:4,
    maxLength:100
},
body:{
    type:String,
    required:"Body is required",
    minLength:4,
}

});
module.exports = mongoose.model("Post",postSchema);