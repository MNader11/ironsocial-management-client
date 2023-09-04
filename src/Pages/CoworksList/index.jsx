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

function CoworksList() {
  const [coworks, setCoworks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/coworks`)
      .then((response) => setCoworks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    {coworks.map((cowork) => (
      <Card key={cowork._id} sx={{ maxWidth: 345, margin: "16px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={cowork.image}
            alt={cowork.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cowork.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {cowork.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={cowork.link}>Book</Link>
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
/*     <div>
      <h1>Coworks</h1>
      {coworks.map((cowork) => {
        return (
          <div key={cowork._id}>
            <img src={cowork.image} />
            <h2>{cowork.name}</h2>
            <p>{cowork.location}</p>
            <p>{cowork.price}</p>
            <p>{cowork.link}</p>
          </div>
        );
      })}
    </div> */
  );
}
export default CoworksList;
