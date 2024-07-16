import React, { useEffect, useState } from "react";
import "../AddCategory/addCategory.css";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { app } from "../../firebase";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      setCategoryName(location.state.myData.name);
      setImageUrl(location.state.myData.imageUrl);
    }
  }, [location.state]);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!categoryName) {
      alert("Please enter a category name");
      return;
    }

    let uploadedImageUrl = imageUrl;

    if (file) {
      const storage = getStorage(app);
      const myRef = storageRef(storage, `category/${Date.now()}`);
      await uploadBytes(myRef, file);
      uploadedImageUrl = await getDownloadURL(myRef);
    }

    const categoryData = {
      name: categoryName,
      imageUrl: uploadedImageUrl,
    };

    try {
      if (location.state == null) {
        const response = await axios.post("http://localhost:3000/category", categoryData);
        console.log(response.data);
      } else {
        const categoryId = location.state.myData.id;
        const response = await axios.put(`http://localhost:3000/category/${categoryId}`, categoryData);
        console.log(response.data);
      }
      navigate("/admin/dashboard/category");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="cat-container">
      <form onSubmit={submitHandler} className="cat-form">
        <input
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
          type="text"
          placeholder="Category Name"
        />
        <input onChange={fileHandler} type="file" />
        {imageUrl && (
          <img
            alt="Selected category"
            style={{ width: "100%", height: "200px" }}
            src={imageUrl}
          />
        )}
        <button className="submitbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
