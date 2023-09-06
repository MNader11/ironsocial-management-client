import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const API_URL = "https://ironsocial-backend.onrender.com";
// MUI
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  // MUI
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        paddingTop: "72px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {projects.map((project) => (
        <Card sx={{ width: 345, margin: "16px" }} key={project._id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={project.name}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={project.image}
            alt={project.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Developed by: {project.developers}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>{project.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>

    /*     <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <img src={project.image} />
            <h2>{project.name}</h2>
            <p>{project.developers}</p>
            <p>{project.link}</p>
          </div>
        );
      })}
    </div> */
  );
}
export default ProjectsList;
