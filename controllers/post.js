    const { json } = require('express');
const Post=require('../models/post');

    exports.getPosts = (req,res)=>{
const posts=Post.find().then(post=>{
    res.json({post:post});
});
    }
    exports.createPosts = (req,res)=>{
        const post= new Post(req.body);
        post.save((err,result)=>{
            if (err)
            {
                return res.status(400).json({
                    error:err.message
                });
            }
            else
            {
                console.log(result);
                return res.status(200).json({
                    post: post
                });
            }
        });    
    }