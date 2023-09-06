import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  /* const storedToken = localStorage.getItem("authToken"); */

  useEffect(() => {
    axios
      .get(
        `${API_URL}/api/tickets` /* , {
        headers: { Authorization: `Bearer ${storedToken}` },
      } */
      )
      .then((response) => setTickets(response.data))
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
            <div key={ticket._id}>
              <h2>{ticket.project}</h2>
              <p>{ticket.description}</p>
              <img src={ticket.image} />
              <p>{ticket.contact}</p>
              <p>{ticket.userName.name}</p>
              <Link to={`/tickets/${ticket._id}/update`}>
                <button type="submit">Update</button>
              </Link>
              <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
export default MyTickets;
