import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


import PageWelcome from "./Pages/Intro/PageWelcome";
import PageSignInOrUP from "./Pages/Intro/PageSignInOrUP";
import PageSignIn from "./Pages/Intro/PageSignIn";
import PageUpdating from "./Pages/Intro/PageUpdating";
import PageNotFound from "./Pages/Intro/PageNotFound";
import PageOTP from "./Pages/Intro/PageOTP";
import PageLanguage from "./Pages/Intro/PageLanguage copy";
import PageCountry from "./Pages/Intro/PageCountry";
import PageToast from "./Pages/Intro/PageToast";
import MainMenu from "./Components/MainMenu";

import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { toast } from "react-toastify";

import DrawerMenu from "./DrawerMenu";

import React, { useState } from "react";
import PageDashboard from "Pages/Dashboard/PageDashboard";
import DrawerSuggestedSupervisor from "Components/DrawerSuggestedSupervisor";
import NetworkAnalysisFilter from "Pages/Dashboard/NetworkAnalysisFilter";
import PageAxiosTest from "Pages/Test/PageAxiosTest";
import RouteMap from "RouteMap";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, LinearProgress, Paper, Rating, Skeleton, Stack, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Typography } from "@mui/material";

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CallIcon from '@mui/icons-material/Call';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import srcmLogo from "./Assets/Images/srcmlogo.png"
import logo from './Assets/Images/IntroImage.svg';


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { styled } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Home from "Pages/Home";
import Weblog from "Pages/Weblog";



function handleOnNextClick(params) {
  toast("clicked");
}

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const navMenuProps = { toggleDrawer: { toggle: handleOnNextClick } };

const history = {
  current: "",
  last: "",
  animationClass: "slide"
}



function App() {


  const [state, setState] = React.useState({
    openDrawer: false,
    openDrawerSuggestedSupervisor: false,
    openMenu: false,
    load: false
  });

  setTimeout(() => {
    import('./Assets/style.css').finally(i => {
      if (!state.load) {
        setState({ ...state, load: true });
      }
    });
  })


  const handleOnFabClick = () => {
    setState({ ...state, openDrawer: !state.openDrawer });
  };

  const handleOpenDrawerSuggestedSupervisor = () => {
    setState({
      ...state,
      openDrawerSuggestedSupervisor: !state.openDrawerSuggestedSupervisor,
    });
  };

  const handleOnFabMenuClick = () => {
    state.openMenu = !state.openMenu
    setState({ ...state });
  };

  const location = useLocation();

  let animationClass = 'slide'

  if (history.current == "") {
    history.current = location.pathname
    history.last = location.pathname
  } else if (history.current != location.pathname) {

    history.animationClass = history.last == location.pathname ? 'slideback' : 'slide'
    if (history.last != location.pathname) {
      history.last = history.current

    }

    history.current = location.pathname

  }

  console.log(history.animationClass)


  const loading = true;


  return (
    <React.Fragment>
      <div className="appContainer">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={'slide'} timeout={500}>

            <Routes location={location}>
              <Route path={RouteMap.home.url} element={<Home />} />
              <Route path={RouteMap.weblog.url} element={<Weblog />} />

            </Routes>

          </CSSTransition>
        </TransitionGroup>


      </div>
{/* 
      <Fab
        size="small"
        sx={fabStyle}
        variant="extended"
        onClick={handleOnFabClick}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab> */}

      {/* <Fab sx={fabStyle} variant="extended" onClick={handleOnFabMenuClick}>
        <MenuIcon sx={{ mr: 1 }} />
      </Fab>

      <Fab
        sx={fabStyle}
        variant="extended"
        onClick={handleOpenDrawerSuggestedSupervisor}
      >
        <MenuIcon sx={{ mb: 2 }} />
      </Fab> */}

      {/* <DrawerMenu
        open={state.openDrawer}
        toggleMenu={handleOnFabMenuClick}
        toggleDrawer={handleOnFabClick}
      />

      <DrawerSuggestedSupervisor
        open={state.openDrawerSuggestedSupervisor}
        toggleDrawer={handleOpenDrawerSuggestedSupervisor}
      />

      {state.openMenu && (
        <MainMenu open={state.openMenu} toggleDrawer={handleOnFabMenuClick} />
      )} */}
    </React.Fragment>
  );
}

export default App;
