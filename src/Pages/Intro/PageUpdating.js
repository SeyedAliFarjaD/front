import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../Assets/Images/CommingSoonPic.svg";
import { toast } from "react-toastify";
import React from "react";

function PageUpdating() {
  function handleOnNextClick(params) {
    toast("clicked");
  }

  return (
    <Container component="main">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{
          animation: "flip 4s ease-in-out infinite",
          marginBottom: "64px",
          maxWidth: "50%"
        }}
      />

      <Typography
        sx={{ color: "#707070", marginBottom: "8px" }}
        component="h1"
        variant="h6"
      >
        We are updating the system
      </Typography>

      <Typography sx={{ color: "#707070" }} component="p" variant="p">
        You can soon continue your activities in the system with peace of mind
      </Typography>
    </Container>
  );
}

export default PageUpdating;
