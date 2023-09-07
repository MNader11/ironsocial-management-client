import { useState, useEffect } from "react";
import axios from "axios";
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
function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/team`)
      .then((response) => setTeam(response.data))
      .catch((error) => console.log(error));
  }, []);
  const theme = useTheme();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginTop: 5 }}>
        <h2>Hi👋 there Ironhacker, nice to meet you! </h2>
        <p>
          We are João & Mehdi, two passionate developers and past Ironhack
          students that based on our experience, want to bring the community
          even closer and give the best support to help your achieve your goals
          and aspirations during your Ironhack journey.
        </p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Card
          sx={{ display: "flex", marginTop: 10, marginRight: 5, width: 480 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                João Elias
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                width={300}
                marginTop={2}
              >
                <p>
                  "Excited about learning new stuff and building captivating
                  websites."
                </p>
                <a href="https://www.linkedin.com/in/jpelias24/">LinkdIn</a>{" "}
                <a href="https://github.com/johnseliseto">GitHub</a>
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="public\Images\elias.jpg"
            alt="Live from space album cover"
          />
        </Card>

        <Card
          sx={{ display: "flex", marginTop: 10, marginRight: 5, width: 480 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Mehdi Nader
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                width={300}
                marginTop={2}
              >
                <p>
                  Full Stack Developer excited about learning new stuff and
                  building.
                </p>
                <a href="https://www.linkedin.com/in/jpelias24/">LinkdIn</a>{" "}
                <a href="https://github.com/johnseliseto">GitHub</a>
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="public\Images\mehdi.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  );
}

export default Team;
