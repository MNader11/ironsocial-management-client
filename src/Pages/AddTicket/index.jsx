import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

const API_URL = "https://ironsocial-backend.onrender.com/";

function AddTicket() {
  const [project, setProject] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { project, image, description, contact };

    axios
      .post(`${API_URL}/api/tickets/create`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setProject("");
        setImage("");
        setDescription("");
        setContact("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Post Ticket</h3>
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
        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
}
export default AddTicket;
