import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../../Assets/Images/404.svg';
import { toast } from 'react-toastify';
import React from 'react';


function PageNotFound() {

  function handleOnNextClick(params) {
    toast('clicked')
  }

  return (

    <Container component="main"  >

      <img src={logo} className="App-logo" alt="logo" style={{ marginBottom: '64px', maxWidth: "50%" }} />

      <Typography sx={{ color: '#707070', marginBottom: '8px' }} component="h1" variant="h6">
        404 Not Found
      </Typography>

      <Typography sx={{ color: '#707070' }} component="p" variant="p">
        Your page may have been deleted or disabled, or you may have entered your URL incorrectly
      </Typography>

    </Container>

  )
}

export default PageNotFound;
