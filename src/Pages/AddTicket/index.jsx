import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddTicket() {
  const [project, setProject] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { project, image, description, contact, userName };

    axios
      .post(`${API_URL}/api/tickets/create`, requestBody)
      .then(() => {
        setProject("");
        setImage("");
        setDescription("");
        setContact("");
        setUserName("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Project:
          <input
            type="text"
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
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
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label>
          User Name:
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
export default AddTicket;
