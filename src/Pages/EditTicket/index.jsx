import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditTicket() {
  const [project, setProject] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [userName, setUserName] = useState("");

  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get(`${API_URL}/api/tickets/${ticketId}`).then((response) => {
      const oneTicket = response.data;
      console.log(response.data)
      setProject(oneTicket.project);
      setImage(oneTicket.image);
      setDescription(oneTicket.description);
      setContact(oneTicket.contact);
      setUserName(oneTicket.userName);
    });
  }, [ticketId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { project, image, description, contact, userName };
    console.log(requestBody)

    axios
      .put(`${API_URL}/api/tickets/${ticketId}/update`, requestBody)
      .then(() => {
        navigate(`/tickets`);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const deleteTicket = () => {
    axios
      .delete(`${API_URL}/api/tickets/${ticketId}/delete`)
      .then(() => {
        navigate("/tickets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit Ticket</h3>
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
        <button type="submit">Update</button>
      </form>
      <button onClick={deleteTicket}>Delete</button>
    </div>
  );
}
export default EditTicket;
