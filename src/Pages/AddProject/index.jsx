import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

const API_URL = "http://localhost:5005";

function AddProject() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { image, name, link, description };

    axios
      .post(`${API_URL}/api/projects/create`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setImage("");
        setName("");
        setLink("");
        setDescription("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Post Project</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
export default AddProject;
