import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CommentList/comment.css"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getComment();
  }, []);

  const getComment = () => {
    axios
      .get("http://localhost:3000/comment") // Corrected URL
      .then((res) => {
        console.log(res.data.comments);
        setComments(res.data.comments); // Correctly set the state, change 'category' to 'comments'
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (commentId) => { // Renamed deleteCategory to deleteComment for consistency
    if (window.confirm("Are you sure want to delete?")) {
      axios.delete('http://localhost:3000/comment/' + commentId) // Corrected URL
        .then(res => {
          console.log(res);
          getComment();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className="comment-container">
      {comments.map(data => (
        <div className='comment-card' key={data._id}>
          <div>
            <p className="email">{data.email}</p>
            <button onClick={() => { deleteComment(data._id) }} className="delete-button"> delete</button> {/* Renamed deleteCategory to deleteComment */}
            <p className="comment-text">{data.commentText}</p>
            <p className="timestamp">{data.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
