import React, { useEffect, useState } from "react";
import "../AddCategory/addCategory.css";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { app } from "../../firebase";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../AddBlog/AddNewBlog.css";
import 'react-quill/dist/quill.snow.css'
import ReactQuill from "react-quill";



const AddNewBlog = () => {
  const [blogName, setBlogName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [blog, setBlog] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const[isLoading, setLoading] = useState(false);




  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCategory();
    console.log(location.state);
    if (location.state != null) {
      setBlogName(location.state.myData.title || "");
      setCategoryName(location.state.myData.category || "");
      setBlog(location.state.myData.description || "");
      setImageUrl(location.state.myData.imageUrl);
    }
  }, [location.state]);




  const getCategory = () => {
    axios
      .get("http://localhost:3000/category") // Corrected URL
      .then((res) => {
        console.log(res.data.category);
        setCategoryList(res.data.category); // Correctly set the state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleBlog=(content, delta,source,editor)=>{

  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);





    if (location.state == null) {
      const storage = getStorage(app);
      const myRef = storageRef(storage, `blog/${Date.now()}`);
      await uploadBytes(myRef, file);
      const uploadedImageUrl = await getDownloadURL(myRef);
      console.log(uploadedImageUrl);

      axios.post('http://www.localhost:3000/blog', {
        title: blogName,
        category: categoryName,
        description: blog,
        imageUrl: uploadedImageUrl
      },{headers:{
        Authorization:"Bearer "+ localStorage.getItem('token')
      }})
        .then(res => {
          setLoading(false);
          console.log(res.data);
          navigate('/admin/dashboard/blog');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      if (file == null) {
        axios.put('http://www.localhost:3000/blog/' + location.state.myData._id, {
          title: blogName,
          category: categoryName,
          description: blog,
          imageUrl: location.state.myData.imageUrl
        })
          .then(res => {
            console.log(res.data);
            navigate('/admin/dashboard/blog');
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        const storage = getStorage(app);
        const myRef = storageRef(storage, `${location.state.myData.imageUrl}`);
        await uploadBytes(myRef, file);
        const uploadedImageUrl = await getDownloadURL(myRef);
        console.log(uploadedImageUrl);

        axios.put('http://www.localhost:3000/blog/' + location.state.myData._id, {
          title: blogName,
          category: categoryName,
          description: blog,
          imageUrl: uploadedImageUrl
        })
          .then(res => {
            console.log(res.data);
            navigate('/admin/dashboard/blog');
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div style={{height:'100vh', overflow:'scroll', padding:'10px'}}>
      
      <form onSubmit={submitHandler} className='blog-form'>
        <input value={blogName} onChange={(e) => { setBlogName(e.target.value) }} type="text" placeholder="Blog Title" />
        <input value={blog} onChange={(e) => { setBlog(e.target.value); }} type="text" placeholder="Blog" />
        {/* <input value={categoryName} onChange={(e) => { setCategoryName(e.target.value); }} type="text" placeholder="Category" />*/}

        <ReactQuill style ={{marginTop:'10px',height:'500px', marginBottom:'10px', backgroundColor:'white'}}
        onChange ={handleBlog}
        
        />



        <select onChange={(e)=>{setCategoryName(e.target.value)}}value ={categoryName} style={{width:'100%',height:'40px',marginTop:'10px',border:'none',borderRadius:'10px'}}/>
        <select className='smtbtncat' ><option> select category</option></select>
        {categoryList.map(data=>(<option key={data._id} value ={data.name}>{data.name}</option>))}


        <input onChange={(e) => { fileHandler(e) }} type='file' />
        



        {imageUrl != null && <img alt="category" style={{ width: "100%", height: "200px" }} src={imageUrl} />}
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewBlog;
