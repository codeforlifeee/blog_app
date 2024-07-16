const express= require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Comment = require('../model/comment')
const checkAuth = require('../middleware/chekAuth')
const chekAuth = require('../middleware/chekAuth')


//post new comment
router.post('/',chekAuth,(req,res)=>{
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        commentText:req.body.commentText,
        blogId:req.body.blogId
    })
    newComment.save()
    .then(result=>{
        res.status(200).json({
            new_Comment:result
        })
    })
    .catch(err=>{
        console.log(err)

    })
})


//get all Comment

router.get('/',(req,res)=>{
    Comment.find()
    .select('_id email commentText blogId timestamp')
    .then(result=>{
        res.status(200).json({
            comments:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

//delete comment by id
router.delete('/:id',(req,res)=>{
    Comment.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            deletedData:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})



//count all comment 
router.get('/get/count/:blogId',(req,res)=>{
    Comment.find({blogId:req.params.blogId}).countDocument()
    .then(result=>{
        res.status(200).json({
            total:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


























module.exports= router;