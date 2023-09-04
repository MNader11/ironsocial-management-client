import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function HomePage() {
  return (
    <div style={{paddingTop: "50px"}}>
      <h1>HomePage</h1>
    </div>
  );
}
export default HomePage;
