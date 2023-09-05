import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function HomePage() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <h1>HomePage</h1>
      <p>
        Welcome to the ultimate resource for Ironhack students seeking the
        perfect coworking spot in Lisbon! We are Mehdi Nader and João Elias,
        your dedicated guides on this journey to discover the ideal workspace to
        enhance your Ironhack experience.
      </p>
      <h2>Why We Created This Website</h2>
      <p>
        Welcome to the ultimate resource for Ironhack students in Lisbon! We're
        here to simplify your search for the perfect coworking spot tailored to
        your needs. With comprehensive reviews, peer connections, food ordering,
        and cross-course assistance, we've got you covered. Let's explore
        Lisbon's coworking scene together and help you succeed during your
        Ironhack journey.
      </p>

      <p>Thank you for joining us on this exciting adventure!</p>
    </div>
  );
}
export default HomePage;
