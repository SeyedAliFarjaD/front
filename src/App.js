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
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Paper, Skeleton, Stack, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Typography } from "@mui/material";

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CallIcon from '@mui/icons-material/Call';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import srcmLogo from "./Assets/Images/srcmlogo.png"
import logo from './Assets/Images/IntroImage.svg';


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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const steps = [
  {
    label: 'می خوای با ما کار کنی',
    description: `خیلی راحت می تونی کافیه بخوای`,
  },
  {
    label: 'گزینه تماس با ما رو بزن',
    description:
      'با ما تماس بگیر تا راهنماییت کنیم',
  },
  {
    label: 'تمام به همین راحتی',
    description: `تموم شد`,
  },
];



function App() {


  const [state, setState] = React.useState({
    openDrawer: false,
    openDrawerSuggestedSupervisor: false,
    openMenu: false,
    load: false
  });

  import('./Assets/style.css').finally(i => {
    if (!state.load) {
      setState({ ...state, load: true });
    }
  });

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




  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const scrollClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  const loading = true;

  return (
    <>
      <div className="header">
        <img className="header__logo" src={srcmLogo} />
        <h1 className="header__title" > سورس مدیا - SRCM  </h1>

        <Box sx={{ flex: 1 }}></Box>
        <Button className="header__button"
          sx={{

          }}
        >
          <CallIcon />
        </Button>
      </div>

      <section>

        <Card className="introWelcome__cardContainer">
          <h1 className="introWelcome__textHeader">
            به سورس مدیا خوش آمدید
          </h1>

          <p className="introWelcome__textPargraph">
            ما در سورس مدیا با تکیه به خداوند قادر متعال همراه با تجربه ای اشباع شده از تخصص ، مهارت و خلاقیت همکاری شیرینی با مشتریان خود رقم زده ایم و از شما نیز دعوت می کنیم به جمع دوستان و همکاران ما بپیوندید 🙂
          </p>

          <Box display="flex">

            <Button
              className="introWelcome__button"
              fullWidth
              variant="contained"
            >
              <PlayCircleIcon sx={{ m: 1 }} />

              نمایش معرفی ما
            </Button>

            <Button
              className="introWelcome__button"
              fullWidth
              variant="contained"
              onClick={() => scrollClick('id1')}
            >
              خدمات ما
              <ArrowDownIcon sx={{ m: 1 }} />

            </Button>

          </Box>

          <img className="introWelcome__image" src="https://srcm.ir/wp-content/uploads/2020/03/hands.jpeg" />

        </Card>

        <h1 id="id1" className="introWelcome__title" >
          محصولات ما
        </h1>

        <Card className="introWelcome__cardContainer">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="سامانه بین‌المللی آموزشی AKE" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>

            <h1>
              بزرگترین سامانه اختصاصی علمی قرن
            </h1>
            <Typography sx={{ fontSize: "14px", textAlign: "justify" }}>
              سامانه بین‌المللی آموزشی AKE (Achieving Knowledge And Earning) با هدف بهبود روند آموزشی و کسب درآمد از یادگیری و یاددهی با ایده‌‌ای نو و فوق‌العاده در حال طراحی و اجرا توسط سورس مدیا میباشد و اطلاعات دقیق روند انجام آن در زیر قابل مشاهده است.
            </Typography>

            <img src={logo} className="App-logo" alt="logo" style={{ objectFit: "none", width: "100%" }} />

          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </TabPanel>
        </Card>


        <Card className="introWelcome__cardContainer">
          <Stepper activeStep={activeStep} orientation="vertical" sx={{ p: 2, textAlign: "right", direction: "rtl" }}>
            {steps.map((step, index) => (
              <Step sx={{ textAlign: "right" }} key={step.label}>
                <StepLabel
                  sx={{}}
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">آخریشه! </Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2, textAlign: "left" }}>
                    <div>

                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        قبلی
                      </Button>

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'عالیه' : 'بعدی'}
                      </Button>

                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography> همه رو رفتی به همین آسونی</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                از نو
              </Button>
            </Paper>
          )}
        </Card>

        <Card className="introWelcome__cardContainer">
          <CardHeader
            avatar={
              loading ? (
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
              ) : (
                <Avatar
                  alt="Ted talk"
                  src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                />
              )
            }
            action={
              loading ? null : (
                <IconButton aria-label="settings">
                </IconButton>
              )
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Ted'
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                '5 hours ago'
              )
            }
          />
          {loading ? (
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}

          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography variant="body2" color="text.secondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>
            )}
          </CardContent>
        </Card>

        <Card className="introWelcome__cardContainer" sx={{ mb: 4, height: "0px" }}>

        </Card>

      </section>
    </>
  )

  return (
    <React.Fragment>
      <div className="appContainer">
        {/* <nav >
          <ul className="App" >
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/PageSignIn">PageSignIn</Link>
            </li>
            <li>
              <Link to="/PageSignInOrUP">PageSignInOrUP</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={'slide'} timeout={500}>

            <Routes location={location}>
              <Route path={RouteMap.signIn.url} element={<PageSignIn />} />
              <Route path="PageSignInOrUP" element={<PageSignInOrUP />} />
              <Route path={RouteMap.signInOrUP.url} element={<PageSignInOrUP />} />
              <Route path="/" element={<PageWelcome />} />
              <Route path="/Welcome" element={<PageWelcome />} />
              <Route path="/PageUpdating" element={<PageUpdating />} />
              <Route path="/PageNotFound" element={<PageNotFound />} />
              <Route path="/PageOTP" element={<PageOTP />} />
              <Route path="/PageLanguage" element={<PageLanguage />} />
              <Route path="/PageCountry" element={<PageCountry />} />
              <Route path="/PageToast" element={<PageToast />} />
              <Route path="/PageDashboard" element={<PageDashboard />} />
              <Route path="/PageAxiosTest" element={<PageAxiosTest />} />
              <Route
                path="/NetworkAnalysisFilter"
                element={<NetworkAnalysisFilter />}
              />
            </Routes>

          </CSSTransition>
        </TransitionGroup>


      </div>

      <Fab
        size="small"
        sx={fabStyle}
        variant="extended"
        onClick={handleOnFabClick}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>

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

      <DrawerMenu
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
      )}
    </React.Fragment>
  );
}

export default App;
