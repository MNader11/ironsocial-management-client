import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const API_URL = "https://ironsocial-backend.onrender.com";

function HomePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          width: 800,
          height: 300,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400, height: 300 }}
          image="https://i.ibb.co/vwhncxD/ironbeers.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <h4>Welcome to IronSocial!</h4>
            </Typography>
            <Typography component="div" variant="h5">
              <h6>
                The ultimate source for Ironhack students looking for Coworking
                and having fun.
              </h6>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              width={300}
              marginTop={2}
            >
              <button>
                <Link to={"/login"}>Login</Link>
              </button>
              <button>
                <Link to={"/signup"}>Signup</Link>
              </button>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
    /*     <div style={{ paddingTop: "50px" }}>
      <h1>AboutPage</h1>
      <p>Hi👋 Ironhackers, welcome to IronSocial! The ultimate source for Ironhack students looking for Coworking and having fun together.</p>
      <p>But that's not all! We've gone the extra mile to enhance your Ironhack experience. On our platform, you can not only find coworking but also connect with your peers, share and explore other students' projects and access a platform to seek help from students across different courses.</p>
      <p>Our mission is crystal clear: to simplify your search for the ultimate coworking spot in Lisbon, tailor-made for Ironhack students. We know you're juggling coursework, projects, and the need for a productive workspace. That's why we've put together comprehensive reviews, detailed insights, and practical tips. Our goal is to equip you with everything you need to select a coworking space that aligns seamlessly with your educational and professional goals. </p>
    </div> */
  );
}
export default HomePage;
