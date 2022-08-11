import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { toast } from "react-toastify";

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

import srcmLogo from "../Assets/Images/srcmlogo.png"
import logo from '../Assets/Images/IntroImage.svg';


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { styled } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";




function Weblog() {
  React.useEffect(() => {
    console.trace('weblog')
  }, []);

  return <></>

  const navigate = useNavigate();
  function handleOnWeblogClick(params) {
    navigate(`/${RouteMap.weblog.url}`)
  }

  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({ posts: [], medias: [], called: false });

  React.useEffect(() => {

    console.table(data)
    if (data.called) return;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return Math.random() * 10;
        }
        const diff = Math.random() * 5;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    //https://srcm.ir/wp-json/wp/v2/media/
    const getPostPromise = axios.get(`https://srcm.ir/wp-json/wp/v2/posts`);
    const getMediaPromise = axios.get(`https://srcm.ir/wp-json/wp/v2/media?media_type=image&per_page=100`);
    getPostPromise.then(res => {
    })

    Promise.all([getPostPromise, getMediaPromise]).then(res => {
      const posts = res[0].data;
      const medias = res[1].data;
      posts.forEach(post => {
        post._media = medias.find(media => media.id == post.featured_media)
      });
      setData({ posts, medias, called: true })

    }).finally(() => {
      clearInterval(timer);
      setProgress(100)
      setTimeout(() => setLoading(false), 1000)
    });

    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <>
      <div className="header">
        <img className="header__logo" src={srcmLogo} />
        <h1 className="header__title" > سورس مدیا - وبلاگ  </h1>

        <Box sx={{ flex: 1 }}></Box>

        <Button className="header__button"
          sx={{

          }}
        >
          <CallIcon />
        </Button>
      </div>

      {loading && <LinearProgress variant="determinate" value={progress} />}

      <section style={{ background: "white" }}>

        {
          data.posts.map(post =>
            <Card >
              {post._media && <img className="introWelcome__image" src={post._media.guid.rendered} />}
            </Card>)
        }


      </section>
    </>
  )


}

export default Weblog;
