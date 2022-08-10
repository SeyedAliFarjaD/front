import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import logo from '../../Assets/Images/IntroImage.svg';
import { toast } from 'react-toastify';
import ArrowBack from '@mui/icons-material/ArrowBack';
import React from 'react';
import { ButtonBase } from '@mui/material';
import avatarQuestionMark from "../../Assets/Images/avatarQuestionMark.svg";
import img404 from "../../Assets/Images/404.svg";
import { useNavigate } from 'react-router-dom';
import RouteMap from 'RouteMap';


function PageSignInOrUP() {

  const navigate = useNavigate();
  function handleOnBackClick() {
    navigate(-1)
  }

  function handleOnChangeLanguageClick() {
    navigate('/' + RouteMap.signIn.url)
  }


  function handleOnSignInClick() {
    navigate('/' + RouteMap.signIn.url)
  }

  function handleOnNextClick() {
    toast('clicked')
  }

  return (

    <Container component="main" maxWidth="xs" >
      <Card sx={{
        padding: '16px', position: 'relative',
        overflow: 'visible'
      }}>

        <Card sx={{
          borderRadius: '50%', width: '144px',
          height: '144px',
          position: 'absolute',
          top: '-72px',
          left: '50%',
          transform: 'translate(-50%, 0)',
          willChange: 'transform;'
        }}>

          <img
            src={avatarQuestionMark}
            className="App-logo"
            alt="logo"
            style={{
              width: "100%",
              height: " 100%",
              objectFit: "none",
            }}
          />

        </Card>


        <div style={{
          textAlign: 'start',
        }}>
          
          <ButtonBase sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={handleOnBackClick} >
            <ArrowBack
              sx={{ color: '#000000', marginRight: '4px', height: '24px', width: '24px' }} />
          </ButtonBase>
          <Button

            variant="contained"
            onClick={handleOnBackClick}
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, color: '#000000', backgroundColor: '#ffa200', borderRadius: '108px', minHeight: '48px' }}>
            <ArrowBack
              sx={{ color: '#000000', marginRight: '4px', height: '16px', width: '16px' }} />
            Back
          </Button>
        </div>

        <Typography sx={{ color: '#707070', margin: '52px 0 8px 0' }} component="h1" variant="h4">
          Signin or Signup
        </Typography>


        <div>


          <Button
            variant="contained"
            onClick={handleOnSignInClick}
            sx={{ color: "#FFFFFF", mt: 3, mb: 1, mr: 1, width: "134px", borderRadius: '21px', height: '54px', background: "#006FFF" }}>

            Sign in

          </Button>
          <Button
            variant="contained"
            onClick={handleOnNextClick}
            sx={{ color: "#FFFFFF", mt: 3, mb: 1, mr: 1, width: "134px", borderRadius: '21px', height: '54px', background: "#006FFF" }}>

            Sign up

          </Button>


        </div>

      </Card>

      <ButtonBase
        onClick={handleOnNextClick} sx={{
          padding: "16px",
          color: '#707070',
          fontSize: '1.25rem',
          fontWeight: 'normal',
          textTransform: 'none',
        }}>
        Change Language
      </ButtonBase>


    </Container >

  )
}

export default PageSignInOrUP;
