import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://ironsocial-backend.onrender.com";

function MyComments() {
  const [comments, setComments] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/user/comments`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response)
        setComments(response.data);
        console.log(response.data)})
        
      .catch((error) => console.log(error));
  });

  const deleteComment = (commentId) => {
    axios
      .delete(`${API_URL}/api/comments/${commentId}/delete`)
      .then(() => {
        setComment((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("comments:", comments);

  return (
    <div>
      <h1>My Comments</h1>
      {comments &&
        comments.map((userComment) => {
          return (
            <div key={userComment._id}>
              <p>{userComment}</p>
              <Link to={`/comments/${userComment._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteComment(userComment._id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
export default MyComments;
