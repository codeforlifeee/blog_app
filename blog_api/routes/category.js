
const express = require('express')

const router= express.Router();

const mongoose = require('mongoose')

const Category = require('../model/category')


//post category by admin

router.post('/',(req,res)=>{
    const newCategory = new Category({
        _id: new mongoose.Types.ObjectId(),

        name: req.body.name,

        //category:req.body.category,

        //description: req.body.description,

        imageUrl: req.body.imageUrl,
    }) 

    newCategory.save()
    .then(result=>{
        res.status(200).json({
            new_Category:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.get('/', (req,res)=>{
    Category.find()
  
    .select('_id name imageUrl')
  
    .then(result=>{
      res.status(200).json({
          category:result
      })
    })  
    .catch(err=>{
      console.log(err)
      res.status(500).json({
          error:err
      })
    })
})

// router.get('/:id',(req,res)=>{
//     Blog.find({_id:req.params.id})

//     .select('_id title category description imageUrl')

//     .then(result=>{
//         res.status(200).json({
//             blog:result
//         })
//     })
//     .catch(err=>{
//         console.log(err)
//         res.status(500).json({
//             error:err
//         })
//     })
// })
  

// router.get('/category/:category',(req,res)=>{
//     Blog.find({category:req.params.category})

//     .select('_id title category description imageUrl')

//     .then(result=>{
//         res.status(200).json({
//             blog:result
//         })
//     })
//     .catch(err=>{
//         console.log(err)
//         res.status(500).json({
//             error:err
//         })
//     })
// })


router.delete('/:id',(req,res)=>{
    Category.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            deleteData:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.put('/:id',(req,res)=>{
    Category.updateOne({_id:req.params.id},req.body)
    .then(result=>{
        res.status(200).json({
            updatedData:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


//return n latest category


router.get('/latest-category/:n',(req,res)=>{
    Category.find().sort({$natural: -1}).limit(req.params.n)
    .then(result=>{
        res.status(200).json({
            Category:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})























//count all category
router.get('/get/count',(req,res)=>{
    Category.find().countDocuments()
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












































































































































































module.exports=router;