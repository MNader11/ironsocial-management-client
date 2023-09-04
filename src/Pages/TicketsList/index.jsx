import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tickets`)
      .then((response) => setTickets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
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
    </div>
  );
}
export default TicketsList;
