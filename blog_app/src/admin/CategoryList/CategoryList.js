import axios from "axios";
import React, { useEffect, useState } from "react";
import "./category.css"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import { deleteObject, ref as storageRef, getStorage } from 'firebase/storage';
import { app } from '../../firebase';

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get("http://localhost:3000/category") // Corrected URL
      .then((res) => {
        console.log(res.data.category);
        setCategory(res.data.category); // Correctly set the state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCategory = (categoryData) => {
    if (window.confirm("Are you sure want to delete?")) {
      const storage = getStorage(app);

      // Extract the file path from the full URL
      const imagePath = categoryData.imageUrl.split("/").pop(); // Extracts the file name from the URL

      const myRef = storageRef(storage, `category/${imagePath}`); // Use the extracted file name

      deleteObject(myRef)
        .then(() => {
          axios.delete(`http://localhost:3000/category/${categoryData._id}`)
            .then((res) => {
              console.log(res);
              getCategory();
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
      {category.map((data) => (
        <div className="card" key={data._id}>
          <p className="category-name">{data.name}</p>
          <img
            className="category-image"
            src={data.imageUrl}
            alt={data.name}
          />
          <button
            onClick={() => {
              navigate('/admin/dashboard/edit-category', { state: { myData: data } });
            }}
            className="smBtn"
          >
            Edit
          </button>
          <button onClick={() => deleteCategory(data)} className="smBtn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
