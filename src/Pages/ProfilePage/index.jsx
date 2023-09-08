import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://i.ibb.co/TTv8nsM/react.png",
    title: "My Projects",
    width: "30%",
    link: "/myprojects"
  },
  {
    url: "https://i.ibb.co/b7VYDBx/Design-sem-nome.png",
    title: "Add Projects",
    width: "30%",
    link: "/projects/create"
  },
  {
    url: "https://i.ibb.co/1M8V2bd/Tickets.jpg",
    title: "My Tickets",
    width: "30%",
    link: "/mytickets"
  },
  {
    url: "https://i.ibb.co/58Vnrjj/tickets1.jpg",
    title: "Add Tickets",
    width: "30%",
    link: "/tickets/create"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const API_URL = "https://ironsocial-backend.onrender.com";

function ProfilePage() {
  return (
    <div
      style={{
        paddingTop: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          /* flexWrap: "wrap", */
          minWidth: 900,
          width: "100%", // Set the width you desire, e.g., "80%" or "100%"
          maxWidth: "800px", // Set a max width to limit how wide it can grow
          justifyContent: "space-around" /* ,
        margin: "auto", */,
        }}
      >
        {images.map((image) => (
          <ImageButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                <Link to={image.link}>
                {image.title}
                </Link>
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  );
}
export default ProfilePage;
