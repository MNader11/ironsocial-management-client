import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    </div>
  );
}
export default CoworksList;
