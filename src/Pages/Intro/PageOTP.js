import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import ArrowBack from '@mui/icons-material/ArrowBack';
import AccessTime from '@mui/icons-material/AccessTime';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import logo from '../../Assets/Images/Avatar.png';


function PageOTP() {

  function handleOnNextClick(params) {
    toast('clicked')
  }

  return (

    <Container component="main" maxWidth="xs" className='TextField-with-border-radius'>
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

          <img src={logo} className="App-logo" alt="logo" style={{
            width: '100%', height: ' 100%',
            objectFit: 'none'
          }} />

        </Card>


        <div style={{
          textAlign: 'start',
          minWidth: '364px',
          display: "flex"
        }}>
          <Button

            variant="contained"
            onClick={handleOnNextClick}
            sx={{ color: '#000000', backgroundColor: '#ffa200', borderRadius: '108px', minHeight: '48px' }}>
            <ArrowBack
              sx={{ color: '#000000', marginRight: '4px', height: '16px', width: '16px' }} />
            Back
          </Button>

          <div style={{ flex: 1 }}></div>

          <Button

            variant="contained"

            onClick={handleOnNextClick}
            sx={{ color: '#000000', backgroundColor: '#ffffff', borderRadius: '108px', minHeight: '48px' }}>

            59: 00

            <AccessTime
              sx={{ color: '#000000', marginRight: '4px', height: '16px', width: '16px' }} />

          </Button>

        </div>

        <Typography sx={{ mt: 4, color: '#006FFF' }} >
          +98 9158826018
        </Typography>

        <Typography sx={{ color: '#3CA700' }} >
          Check your Phone to Get  Code
        </Typography>



        <Paper
          component="form"
          sx={{ mt: 4, p: 1, borderRadius: '90px', backgroundColor: '#f8f8f8' }}
        >

          <InputBase
            sx={{}}
            fullWidth
            placeholder="Enter OPT"
            type="tel"
            inputProps={{ 'aria-label': 'Enter OPT' }}
          />

        </Paper>

        <Button
          type="submit"
          size="small"
          fullWidth
          variant="contained"
          onClick={handleOnNextClick}
          sx={{ mt: 3, mb: 1, borderRadius: '108px', minHeight: '', minWidth: '128px' }}>

          Send

        </Button>

      </Card>

      <div style={{
      }}>

        <Button
          disabled={true}
          onClick={handleOnNextClick} sx={{ color: '#707070' }}>
          Resend OTP
        </Button>


      </div>



    </Container >

  )
}

export default PageOTP;
