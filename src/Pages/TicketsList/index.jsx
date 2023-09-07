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

const API_URL = "https://ironsocial-backend.onrender.com";

function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tickets`)
      .then((response) => setTickets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        paddingTop: "72px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {tickets.map((ticket) => {
        return (
          <div       style={{
            paddingTop: "72px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
            <Card sx={{ maxWidth: 345, margin: '16px' }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={ticket.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ticket.project}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ticket.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h3>
                      If you think you can be a good help, please contact me on
                      {ticket.contact}
                    </h3>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Comment
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
    /*     <div>
      <h1>Tickets</h1>
      {tickets.map((ticket) => {
        return (
          <div key={ticket._id}>
            <h2>{ticket.project}</h2>
            <p>{ticket.description}</p>
            <img src={ticket.image} />
            <p>{ticket.contact}</p>
            <p>{ticket.userName.name}</p>
          </div>
        );
      })}
    </div> */
  );
}
export default TicketsList;
