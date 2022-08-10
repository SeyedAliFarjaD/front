import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CopyAllIcon from "@mui/icons-material/CopyAllTwoTone";
import avatar2 from "../Assets/Images/avatar27.png";

import { useNavigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

export default function DrawerSuggestedSupervisor(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    open: props.open,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.toggleDrawer();
    setState({ ...state, ["open"]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(`/${text}`)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton onClick={props.toggleMenu}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Menu"} />
        </ListItemButton>
      </ListItem>

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  const getCard = (i) => {
    return (
      <Card
        key={i}
        sx={{ width: "172px", px: 1, py: 2, borderRadius: "16px", m: 1 }}
      >
        <img
          src={avatar2}
          className="App-logo"
          alt="logo"
          style={{
            width: "70%",
            height: "64px",
            objectFit: "cover",
          }}
        />

        <Typography sx={{ my: 1, color: "#707070" }}>Sample name</Typography>

        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#3CA700",
            borderRadius: "108px",
            minHeight: "28px",
            mr: 1,
            width: "82px",
            fontSize: 10,
          }}
        >
          Accept
        </Button>

        <Button
          variant="contained"
          sx={{
            color: "#000000",
            backgroundColor: "#ffa200",
            borderRadius: "108px",
            minHeight: "28px",
            width: "82px",
            fontSize: 10,
          }}
        >
          More
        </Button>
      </Card>
    );
  };

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer('left', true)}> left </Button> */}

        <Drawer
          sx={{ width: "568px" }}
          anchor={"left"}
          open={props["open"]}
          onClose={toggleDrawer("left", false)}
        >
          <Box
            sx={{
              width: 640,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
            role="presentation"
          >
            <Typography
              component="h2"
              sx={{
                color: "#1D1D1D",
                m: 4,
                textAlign: "start",
                fontSize: 24,
              }}
            >
              Suggested Supervisor
            </Typography>

            {/* <Card
              sx={{
                display: "inline-flex",
                alignSelf: "center",
                minHeight: "34px",
                px: 4,
                py: 1,
                mx: 4,
                borderRadius: "120px",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  color: "#1D1D1D",
                  textAlign: "start",
                  fontSize: 24,
                }}
              >
                ID:
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "#105BC3",
                  textAlign: "start",
                  fontSize: 24,
                  mx: 2,
                }}
              >
                3343505280
              </Typography>

              <Button
                size="small"
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#3CA700",
                  borderRadius: "108px",
                  minHeight: "34px",
                }}
              >
                <CopyAllIcon
                  sx={{
                    color: "#FFFFFF",
                    marginRight: "4px",
                    height: "16px",
                    width: "16px",
                  }}
                />
                Back
              </Button>
            </Card>

            <Card
              sx={{
                borderRadius: "50%",
                width: "164px",
                height: "164px",
                margin: "auto",
                overflow: "visible",
                mt: 4,
              }}
            >
              <img
                src={avatar2}
                className="App-logo"
                alt="logo"
                style={{
                  width: "100%",
                  height: " 100%",
                  objectFit: "none",
                  borderRadius: "50%",
                }}
              />
            </Card>

            <Box>
              <Button
                size="small"
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  height: "48px",
                  width: "48px",
                  minWidth: "48px",
                  m: 1,
                }}
              >
                <CopyAllIcon sx={{ color: "#38AB72" }} />
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  height: "48px",
                  width: "48px",
                  minWidth: "48px",
                  m: 1,
                }}
              >
                <CopyAllIcon sx={{ color: "#006FFF" }} />
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  height: "48px",
                  width: "48px",
                  minWidth: "48px",
                  m: 1,
                }}
              >
                <CopyAllIcon sx={{ color: "#FF5D5D" }} />
              </Button>
            </Box>

            <Box sx={{ m: 2 }}>
              <Typography
                component="span"
                sx={{
                  color: "#000000",
                  textAlign: "start",
                  fontSize: 24,
                  fontWeight: 500,
                  mx: 1,
                }}
              >
                Jack Jason
              </Typography>

              <ReactCountryFlag
                countryCode={"IR"}
                svg
                style={{
                  width: "48px",
                  height: "36px",
                  margin: "4px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  boxShadow:
                    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                }}
              />
            </Box>

            <Typography
              component="h2"
              sx={{
                color: "#1D1D1D",
                m: 4,
                textAlign: "start",
                fontSize: 24,
              }}
            >
              Network Length : 200
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#1D1D1D",
                m: 4,
                textAlign: "start",
                fontSize: 24,
              }}
            >
              Register Date : 2021-06-05
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#1D1D1D",
                m: 4,
                textAlign: "start",
                fontSize: 24,
              }}
            >
              Badges And Honors :
            </Typography> */}

            <Box display={"flex"} flexWrap="wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => getCard(i))}
            </Box>

            <Box display="flex" sx={{ p: 6 }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  color: "#FFFFFF",
                  backgroundColor: "#3CA700",
                  borderRadius: "108px",
                  minHeight: "48px",
                  mx: 1,
                }}
              >
                Accept
              </Button>

              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  color: "#FFFFFF",
                  backgroundColor: "#006FFF",
                  borderRadius: "108px",
                  minHeight: "48px",
                }}
              >
                Know Others
              </Button>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  color: "#FFFFFF",
                  backgroundColor: "#EF4747",
                  borderRadius: "108px",
                  minHeight: "48px",
                  mx: 1,
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
