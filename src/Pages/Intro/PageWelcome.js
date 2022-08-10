import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../../Assets/Images/IntroImage.svg';
import { toast } from 'react-toastify';
import React from 'react';
import RouteMap, { changePage } from 'RouteMap';
import { useNavigate } from 'react-router-dom';


function PageWelcome() {

  const navigate = useNavigate();
  function handleOnNextClick(params) {
    navigate(`/${RouteMap.signInOrUP.url}`)
  }

  return (

    <Container component="main" maxWidth="xs" >

      <img src={logo} className="App-logo" alt="logo" style={{ marginBottom: '64px', width:"50%" }} />

      <Typography sx={{ color: '#707070', marginBottom: '8px', fontSize: "40px" }} component="h1" variant="h4">
        Welcome to AKE
      </Typography>

      <Typography sx={{ color: '#707070', fontSize: "20px" }} component="p" >
        (Achieving Knowledge And Earning)
      </Typography>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleOnNextClick}
        sx={{ mt: 3, mb: 2, width: "310px", borderRadius: '21px', minHeight: '55px', background: "#006FFF", marginTop: "36px" }}>

        Next

      </Button>

    </Container>

  )
}

export default PageWelcome;
