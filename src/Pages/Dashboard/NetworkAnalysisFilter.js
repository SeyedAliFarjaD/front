import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  Avatar,
  AvatarGroup,
  Button,
  ButtonBase,
  Fab,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import logo from "../../Assets/Images/Avatar.png";
import NetworkChart from "Components/NetworkChart";
import LineChart from "Components/LineChart";

export default function NetworkAnalysisFilter() {
  return (
    <Box className="margin-bottom dashboard" sx={{ flexGrow: 1, m: 10 }}>
      <Box display="flex">
        <Typography
          component="h2"
          sx={{
            color: "#1D1D1D",
            textAlign: "start",
            fontSize: 24,
          }}
        >
          Network Analysis & Filter
        </Typography>

        <Button
          variant="contained"
          sx={{
            color: "#000000",
            backgroundColor: "#ffa200",
            borderRadius: "108px",
            ml: "auto",
          }}
        >
          <ArrowBackIcon
            sx={{
              color: "#000000",
              marginRight: "4px",
              height: "16px",
              width: "16px",
            }}
          />
          Back To Dashboard
        </Button>
      </Box>

      <Card sx={{ height: "456px", mt: 4, position: "relative" }}>
        <Box sx={{ height: "100%" }} display="flex">
          <Box
            sx={{ margin: "auto", height: "100%", width: "100%" }}
            display="flex"
            flexDirection="column"
          >
            <NetworkChart />
          </Box>
        </Box>

        <Typography
          component="span"
          sx={{ position: "absolute", top: "32px", left: "16px" }}
        >
          Network
        </Typography>

        <Card
          component="form"
          sx={{
            p: 1,
            borderRadius: "90px",
            backgroundColor: "#ffffff",
            display: "flex",
            position: "absolute",
            top: "16px",
            right: "16px",
          }}
        >
          <InputBase
            sx={{ pl: 1 }}
            type="search"
            placeholder="Search..."
            inputProps={{ "aria-label": "Search" }}
          />
          <SearchIcon />
        </Card>

        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#006FFF",
            borderRadius: "108px",
            minHeight: "48px",
            position: "absolute",
            left: "16px",
            bottom: "16px",
          }}
        >
          Analysis & Filter
        </Button>

        <Button
          size="small"
          variant="contained"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#006FFF",
            borderRadius: "50%",
            height: "48px",
            width: "48px",
            minWidth: "48px",
            position: "absolute",
            right: "16px",
            bottom: "16px",
          }}
        >
          <AddIcon />
        </Button>
      </Card>

      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "456px", mt: 4, position: "relative" }}>
            <Typography component="p" sx={{ textAlign: "start", p: 1 }}>
              Network growth rate
            </Typography>
            <Box sx={{ height: "100%" }} display="flex">
              <Box
                sx={{ margin: "auto", height: "100%", width: "100%" }}
                display="flex"
                flexDirection="column"
              >
                <LineChart />
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: "456px", mt: 4, position: "relative", p: 2 }}>
            <Typography component="p" sx={{ textAlign: "start" }}>
              Network Info
            </Typography>
            {/* <Box sx={{ height: "100%" }} display="flex">
              <Box
                sx={{ margin: "auto", height: "100%", width: "100%" }}
                display="flex"
                flexDirection="column"
              ></Box>
            </Box> */}

            <Grid
              sx={{ textAlign: "start" }}
              container
              spacing={0}
              columnSpacing={{ xs: 1 }}
            >
              <Grid item xs={5}>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
                <Typography component="p">Number of Members:</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
                <Typography component="p" className="text-value">
                  200
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ background: "#FFA20022", borderRadius: "16px", mt: 4 }}>
              <Typography
                component="p"
                sx={{ textAlign: "start", p: 1, fontWeight: 500 }}
              >
                Notice
              </Typography>
              <Typography component="p" sx={{ textAlign: "start", p: 1 }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
