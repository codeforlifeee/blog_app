import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref as storageRef, getStorage } from 'firebase/storage';
import { app } from '../../firebase';
import '../CategoryList/category.css'; // Ensure this path is correct

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    axios
      .get("http://localhost:3000/blog")
      .then((res) => {
        console.log(res.data.blog);
        setBlogs(res.data.blog.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBlog = (blogData) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const storage = getStorage(app);
      const myRef = storageRef(storage, `category/${blogData.imagePath}`);

      deleteObject(myRef)
        .then(result => {
          axios.delete('http://localhost:3000/blog/' + blogData._id,{headers:{
            Authorization:"Bearer "+ localStorage.getItem('token')
          }})
            .then((res) => {
              console.log(res);
              getBlogs();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="category-list-container">
      {blogs.map((data) => (
        <div className="card" key={data._id}>
          <div className="category-name">
            <p>{data.title}</p>
          </div>
          <div>
            <img className="category-image" src={data.imageUrl} alt="Blog" />
          </div>
          <div>
            <button className="smBtn" onClick={() => { navigate('/admin/dashboard/edit-blog', { state: { myData: data } }) }}>
              Edit
            </button>
          </div>
          <div>
            <button className="smBtn" onClick={() => deleteBlog(data)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
