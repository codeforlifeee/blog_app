import React, { useEffect, useState } from 'react'
import '../Blog/blog.css'
import axios from 'axios'

const Blog = () => {
    const [category, setCategory] = useState([])
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getCategory();
        getBlog();
    }, [])

    const getCategory = () => {
        axios.get('http://localhost:3000/latest-category/4')
        .then(res => {
            console.log(res)
            setCategory(res.data.Category)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getBlog = () => {
        axios.get('http://localhost:3000/blog/latest-post')
        .then(res => {
            console.log(res)
            setBlogs(res.data.blog)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='main-container'> 
            <div className='blogs-container'>
                <p>blogs</p>
            </div>

            <div className='cat-container'>
                {
                    blogs.map(data => (
                        <div className='blog-box' key={data.id}>
                            <img className='blog-images' alt='blog' src={data.imageUrl} />
                            <p className='blog-category'>{data.category}</p>
                            <h2 className='blog-title'>{data.title}</h2>
                        </div>
                    ))
                }
            </div>
            
            <div className='c-container'>
                <h3>All Category</h3>
                <div className='categories'>
                    {category.map(data => (
                        <div key={data.id}>
                            <button>{data.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
