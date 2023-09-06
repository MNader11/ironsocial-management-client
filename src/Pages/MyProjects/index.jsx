import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteProjects = (projectId) => {
    axios
      .delete(`${API_URL}/api/projects/${projectId}/delete`)
      .then(() => {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>My Projects</h1>
      {projects &&
        projects.map((project) => {
          return (
            <div key={project._id}>
              <img src={project.image} />
              <h2>{project.name}</h2>
              <p>{project.link}</p>
              <p>{project.description}</p>
              <Link to={`/projects/${project._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteProjects(project._id)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}
export default MyProjects;
