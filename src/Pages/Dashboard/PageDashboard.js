import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  Avatar,
  AvatarGroup,
  Badge,
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
import PersonOffIcon from "@mui/icons-material/PersonOff";
import logo from "../../Assets/Images/Avatar.png";
import NetworkChart from "Components/NetworkChart";

function PageDashboard() {
  return (
    <Box className="margin-bottom dashboard" sx={{ flexGrow: 1, m: 10 }}>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <Grid item xs={1} md={2} xl={4}></Grid> */}

        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: "16px", display: "flex" }}>
            {/* AKE ID box */}
            <Box sx={{ width: "36px", background: "#006FFF" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    writingMode: "vertical-rl",
                    fontSize: "10px",
                    color: "#FFFFFF",
                    transform: "rotate(180deg)",
                  }}
                >
                  @AKE_3343208280
                </Typography>
              </Box>
            </Box>

            <Box sx={{ padding: "8px 16px", flex: 1 }}>
              <Box sx={{ p: 0, flex: 1 }}>
                <Box
                  component="span"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ButtonBase component="span" sx={{ textAlign: "start" }}>
                    <Typography>Personal Information</Typography>
                    <EditIcon sx={{ color: "#006FFF" }} />
                  </ButtonBase>

                  <ButtonBase
                    sx={{
                      width: "128px",
                      color: "#000000",
                      background: "#00FF5544",
                      borderRadius: "12px",
                    }}
                  >
                    View more
                    <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                  </ButtonBase>
                </Box>
              </Box>

              <Box sx={{ mt: 1, flex: 1, fontSize: 16 }}>
                <Box
                  component="span"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box sx={{ flex: 1 }}>
                    <Box
                      component="span"
                      display="flex"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      <Typography sx={{ flex: 1, fontSize: 13 }}>
                        Name: Amin
                      </Typography>
                      <Typography sx={{ flex: 1, fontSize: 13 }}>
                        Family: Azadian
                      </Typography>
                    </Box>

                    <Box
                      component="span"
                      display="flex"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      <Typography sx={{ flex: 1, fontSize: 13 }}>
                        Age: 26
                      </Typography>
                      <Typography sx={{ flex: 1, fontSize: 13 }}>
                        Country: Islamic Republic Of Iran
                      </Typography>
                    </Box>

                    <Box
                      component="span"
                      display="flex"
                      sx={{ flex: 1, textAlign: "left" }}
                    >
                      <Typography sx={{ fontSize: 13 }}>Wallet: 35$</Typography>
                      <ButtonBase
                        sx={{
                          ml: 1,
                          background: "#00FF5544",
                          borderRadius: "100px",
                          pr: 2,
                          pl: 2,
                        }}
                      >
                        <Typography sx={{ fontSize: 13 }}>
                          Charge Wallet
                        </Typography>
                      </ButtonBase>
                    </Box>
                  </Box>

                  <ButtonBase
                    sx={{
                      color: "#000000",
                      background: "#FF000055",
                      flexDirection: "column",
                      width: "128px",
                      borderRadius: "12px",
                      p: 1,
                    }}
                  >
                    <PowerSettingsNewIcon sx={{ color: "#000000", mb: 1 }} />
                    <Typography>Sign out</Typography>
                  </ButtonBase>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={2}>
          <Card
            sx={{
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              margin: "auto",
              overflow: "visible",
              position: "relative",
            }}
          >
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{
                width: "100%",
                height: " 100%",
                objectFit: "none",
                borderRadius: "50%",
              }}
            />
            <IconButton
              style={{ backgroundColor: "#006FFF" }}
              sx={{
                borderRadius: "50%",
                margin: "auto",
                backgroundColor: "#006FFF",
                height: "24px",
                width: "24px",
                position: "absolute",
                bottom: "0",
                left: "68%",
              }}
            >
              <PowerSettingsNewIcon
                sx={{
                  height: "16px",
                  width: "16px",
                  color: "#FFFFFF",
                }}
              />
            </IconButton>
            <IconButton
              style={{ backgroundColor: "#FFA200" }}
              sx={{
                borderRadius: "50%",
                margin: "auto",
                backgroundColor: "#FFA200",
                height: "24px",
                width: "24px",
                position: "absolute",
                bottom: "-10%",
                left: " 40%",
              }}
            >
              <PowerSettingsNewIcon
                sx={{
                  height: "16px",
                  width: "16px",
                  color: "#FFFFFF",
                }}
              />
            </IconButton>
            <IconButton
              style={{ backgroundColor: "#FF5D5D" }}
              sx={{
                borderRadius: "50%",
                margin: "auto",
                backgroundColor: "#FF5D5D",
                height: "24px",
                width: "24px",
                position: "absolute",
                bottom: "0",
                left: "12%",
              }}
            >
              <PowerSettingsNewIcon
                sx={{
                  height: "16px",
                  width: "16px",
                  color: "#FFFFFF",
                }}
              />
            </IconButton>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <div>
            <Card sx={{ borderRadius: "16px", p: 2, height: "88px" }}>
              <Box
                component="span"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography component="span" sx={{ textAlign: "start" }}>
                  AKE Licenses
                </Typography>
                <ButtonBase
                  sx={{
                    color: "#000000",
                    background: "#00FF5544",
                    borderRadius: "12px",
                    width: "128px",
                  }}
                >
                  View more
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                </ButtonBase>
              </Box>

              <Box sx={{ mt: 2 }}>
                <AvatarGroup spacing={2} max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>

                {/* <Fab
                  sx={{ boxShadow: 1, mr: 2, background: "#FFFFFF" }}
                  size="small"
                >
                  <MoreVertIcon sx={{}} />
                </Fab>

                <Fab
                  sx={{ boxShadow: 1, mr: 2, background: "#FFFFFF" }}
                  size="small"
                >
                  <MoreVertIcon sx={{}} />
                </Fab>

                <Fab
                  sx={{ boxShadow: 1, mr: 2, background: "#FFFFFF" }}
                  size="small"
                >
                  <MoreVertIcon sx={{}} />
                </Fab>

                <Fab
                  sx={{ boxShadow: 1, mr: 2, background: "#FFFFFF" }}
                  size="small"
                >
                  <MoreVertIcon sx={{}} />
                </Fab>

                <Fab
                  sx={{ boxShadow: 1, mr: 2, background: "#FFFFFF" }}
                  size="small"
                >
                  <MoreVertIcon sx={{}} />
                </Fab> */}
              </Box>
            </Card>
          </div>
        </Grid>

        {/* <Grid item xs={1} md={2} xl={4}></Grid> */}

        {/* <Grid item xs={6} md={4}>
          <Paper>xs=6 md=4</Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper>xs=6 md=4</Paper>
        </Grid>
        <Grid item xs={6} md={8}>
          <Paper>xs=6 md=8</Paper>
        </Grid> */}
      </Grid>

      <Card sx={{ height: "456px", mt: 4, position: "relative" }}>
        <Box sx={{ height: "100%" }} display="flex">
          <Box sx={{ margin: "auto" }} display="flex" flexDirection="column">
            <PersonOffIcon
              sx={{
                margin: "auto",
                width: "128px",
                height: "128px",
                color: "#00000044",
              }}
            />

            <Typography
              component="span"
              sx={{
                color: "#00000044",
                margin: "auto auto 16px auto",
                textAlign: "start",
              }}
            >
              There is no item
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#006FFF",
                borderRadius: "108px",
                minHeight: "48px",
              }}
            >
              Getting Started
            </Button>
          </Box>
        </Box>

        <Box
          sx={{ top: 0, position: "absolute", height: "100%", width: "100%" }}
        >
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
        </Box>
      </Card>

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

      <Box display={"flex"} flexDirection="column" sx={{ position: "fixed", bottom: '32px', left: '32px' }}>
        <Fab sx={{ background: "#FFFFFF" }} aria-label="edit">
          <EditIcon />
        </Fab>

        <Badge
          color="primary"
          overlap='circular'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={2}
          sx={{
            mt: 1, "& .MuiBadge-badge": {
              left: "0",
              top: "0",
              transform: 'none',
              zIndex: 25000,
            }
          }}
        >
          <Fab sx={{ background: "#FFFFFF" }} aria-label="edit">
            <EditIcon />
          </Fab>

          {/* <Box component="span" sx={{ borderRadius: '50%', background: "#006FFF" }} >
            </Box> */}
        </Badge>

        <Fab sx={{ background: "#FFFFFF", mt: 1 }} aria-label="edit">
          <EditIcon />
        </Fab>

        <Box sx={{ mt: 1 }}>
          <Fab sx={{ background: "#FFFFFF", mr: 1 }} aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab sx={{ background: "#FFFFFF" }} aria-label="edit">
            <EditIcon />
          </Fab>

        </Box>

      </Box>
    </Box>
  );
}

export default PageDashboard;
