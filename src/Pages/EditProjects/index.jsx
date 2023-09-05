import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditProject() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/projects/${projectId}`).then((response) => {
      const oneProject = response.data;
      console.log(response.data);
      setImage(oneProject.image);
      setName(oneProject.name);
      setLink(oneProject.link);
      setDescription(oneProject.Description);
    });
  }, [projectId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { image, name, link, description };
    console.log(requestBody);

    axios
      .put(`${API_URL}/api/projects/${projectId}/update`, requestBody)
      .then(() => {
        navigate(`/projects`);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const deleteProject = () => {
    axios
      .delete(`${API_URL}/api/projects/${projectId}/delete`)
      .then(() => {
        navigate("/projects");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Edit Project</h3>
      <form onSubmit={handleSubmit}>
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
          name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            name="decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={deleteProject}>Delete</button>
    </div>
  );
}
export default EditProject;
