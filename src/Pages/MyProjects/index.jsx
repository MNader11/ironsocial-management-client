import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const API_URL = "https://ironsocial-backend.onrender.com";
// MUI
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/myProjects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setProjects(response.data.userProjects))
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

  console.log("projects:", projects);

  return (
    <div>
      <h1>My Projects</h1>
      {projects &&
        projects.map((project) => {
          return (
            <div
              style={{
                paddingTop: "72px",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-around" }}>
                <Link to={`/projects/${project._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteProjects(project._id)}>
                Delete
              </button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
export default MyProjects;

/*             <div key={project._id}>
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
            </div> */
