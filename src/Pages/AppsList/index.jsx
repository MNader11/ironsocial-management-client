import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const API_URL = "http://localhost:5005";

function AppsList() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/apps`)
      .then((response) => setApps(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{paddingTop: "72px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
      {apps.map((app) => (
        <Card key={app._id} sx={{ maxWidth: 185, margin: "16px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={app.image}
              alt={app.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {app.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Delivery Type: {app.deliveryType}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={app.link}>ORDER</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>

    /*     <div>
      <h1>Apps</h1>
      {apps.map((app) => {
        return (
          <div key={app._id}>
            <img src={app.image} />
            <h2>{app.name}</h2>
            <p>{app.deliveryType}</p>
            <p>{app.link}</p>
          </div>
        );
      })}
    </div> */
  );
}
export default AppsList;
