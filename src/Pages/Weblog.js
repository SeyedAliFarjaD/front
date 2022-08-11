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
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Divider, IconButton, LinearProgress, Paper, Rating, Skeleton, Stack, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Typography } from "@mui/material";

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


  const navigate = useNavigate();
  function handleOnWeblogClick(params) {
    navigate(`/${RouteMap.weblog.url}`)
  }

  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({ posts: [], called: false });

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

    Promise.all([getPostPromise]).then(res => {
      const posts = res[0].data;
      posts.forEach(post => {
        axios.get(`https://srcm.ir/wp-json/wp/v2/media/` + post.featured_media).then(res => {
          post._media = res.data;
          setData({ posts, called: true })
        })
      });

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
          loading ? <Card sx={{ mx: 1, my: 6 }}>
            <Skeleton variant="rectangular" className="post__image" />

            <Typography className="post__title" >
              <Skeleton />
            </Typography>

            <Typography className="post__subtitle"  >
              <Skeleton variant="rectangular" height={132} />
            </Typography>

            <Divider />

            <Typography className="post__date" sx={{ direction: "ltr" }}>
              <Skeleton width={"20%"} />
            </Typography>


          </Card>
            :
            data.posts.map(post =>

              <Card sx={{ mx: 1, my: 6 }}>
                {post._media && <img className="post__image" src={post._media.source_url} />}
                <Typography className="post__title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}>

                </Typography>

                <Typography className="post__subtitle"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                </Typography>

                <Divider />

                <Typography className="post__date" >
                  {new Date(post.date).toLocaleString('fa-IR')}
                </Typography>

              </Card>
            )
        }



        <Box sx={{ height: "32px" }}>

        </Box>
      </section>
    </>
  )


}

export default Weblog;
