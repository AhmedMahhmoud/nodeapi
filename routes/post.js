const postController = require("../controllers/post");
const express = require("express");
module.exports= router =express.Router();

 router.get("/",postController.getPosts); 
 
 router.post("/post",postController.createPosts); 
// module.exports = {getPosts};+