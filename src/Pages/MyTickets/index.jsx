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

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/myTickets`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setTickets(response.data.userTickets))
      .catch((error) => console.log(error));
  }, []);

  const deleteTicket = (ticketId) => {
    axios
      .delete(`${API_URL}/api/tickets/${ticketId}/delete`)
      .then(() => {
        setTickets((prevTickets) =>
          prevTickets.filter((ticket) => ticket._id !== ticketId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>My Tickets</h1>
      {tickets &&
        tickets.map((ticket) => {
          return (
            <div style={{
              paddingTop: "72px",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                {ticket.project}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent: "space-around" }}>
              <Link to={`/tickets/${ticket._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
              </CardActions>
            </Card>
            </div>

            /*             <div key={ticket._id}>
              <h2>{ticket.project}</h2>
              <p>{ticket.description}</p>
              <img src={ticket.image} />
              <p>{ticket.contact}</p>
              <p>{ticket.userName.name}</p>
              <Link to={`/tickets/${ticket._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
            </div> */
          );
        })}
    </div>
  );
}
export default MyTickets;
