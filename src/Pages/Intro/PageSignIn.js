import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import logo from "../../Assets/Images/IntroImage.svg";
import avatarQuestionMark from "../../Assets/Images/avatarQuestionMark.svg";
import { toast } from "react-toastify";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";
import { Box, ButtonBase } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import RouteMap from 'RouteMap';


function PageSignIn() {



  function handleOnNextClick(params) {
    toast("clicked");
  }


  const navigate = useNavigate();
  function handleOnBackClick() {
    navigate(-1)
  }


  const [state, setState] = React.useState({
    id: "",
    idError: true,
    passwordError: true,
    password: "",
    idErrorText: " ",
    passwordErrorText: " ",
  });

  function handleOnSignInClick(params) {
    axios.post(`https://peymoon.com/auth/login`, {
      "username": state.id,
      "password": state.password,
    })
      .then((res) => {
        toast(res.data.message);
        localStorage.setItem('token', res.data.data.token)
      })
      .catch((error) => {
        toast.error(error.response.data.message);

      });
  }


  const handleChangePassword = (event) => {
    const password = event.target.value;

    const RegPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const passwordError = !RegPassword.test(password);
    const passwordErrorText = passwordError ? "Password Must Have Minimum eight characters, at least one letter and one number" : " ";
    setState({ ...state, passwordError, password, passwordErrorText });
  }

  const handleChange = (event) => {
    const id = event.target.value;

    // const RegEmail = /^[*]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const RegEmail = /^[^@]+@[^@]+\.[^@]+$/;
    const RegTel = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/gim
    );

    const idError = !RegEmail.test(id) && !RegTel.test(id);
    const idErrorText = idError ? "Enter Valid ID" : " ";
    setState({ ...state, id, idError, idErrorText });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="TextField-with-border-radius"
    >
      <Card
        sx={{
          padding: "16px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <Card
          sx={{
            borderRadius: "50%",
            width: "144px",
            height: "144px",
            position: "absolute",
            top: "-72px",
            left: "50%",
            transform: "translate(-50%, 0)",
            willChange: "transform;",
          }}
        >
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


        <Box
          sx={{
            mt: 7,
          }}
        >
          <TextField
            error={state.idError}
            value={state.id}
            onChange={handleChange}
            helperText={state.idErrorText}
            fullWidth
            type="text"
            placeholder="AKE ID  or Phone or Email"
            inputProps={{
              className: "shadow",
              sx: {
                borderRadius: "90px !important",
                backgroundColor: "#f8f8f8",
              },
              "aria-label": "AKE ID  or Phone or Email",
            }}
          />
        </Box>

        <Box sx={{ mt: 0 }}>
          <TextField
            fullWidth
            error={state.passwordError}
            value={state.password}
            onChange={handleChangePassword}
            helperText={state.passwordErrorText}
            placeholder="Password"
            type="password"
            inputProps={{
              className: "shadow",
              sx: {
                borderRadius: "90px !important",
                backgroundColor: "#f8f8f8",
              },
              "aria-label": "password",
            }}
          />
        </Box>

        {/* <InputBase
          className='TextField-with-border-radius'
          style={{
            borderRadius: '108px'
          }}
          sx={{ mt: 4, borderRadius: '108px' }}
          id="standard-search"
          fullWidth
          label="AKE ID  or Phone or Email"
          type="phone"
          variant="outlined"
        />

        <InputBase
          className='TextField-with-border-radius'
          style={{
            borderRadius: '108px'
          }}
          sx={{ mt: 2, borderRadius: '108px' }}
          id="standard-search"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
        /> */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleOnSignInClick}
          size="large"
          disabled={state.idError}
          sx={{ mt: 0, mb: 1, borderRadius: "108px", minWidth: "128px", height: '54px' }}
        >
          Sign in
        </Button>
      </Card>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >

        <ButtonBase
          onClick={handleOnNextClick} sx={{
            padding: "16px 0",
            color: '#707070',
            fontSize: '1.25rem',
            fontWeight: 'normal',
            textTransform: 'none',
          }}>
          Lost Password?
        </ButtonBase>

        <div
          style={{
            flex: "1",
          }}
        ></div>
        <ButtonBase
          onClick={handleOnNextClick} sx={{
            padding: "16px 0",
            color: '#707070',
            fontSize: '1.25rem',
            fontWeight: 'normal',
            textTransform: 'none',
          }}>
          Sign up
        </ButtonBase>

        <span
          style={{
            margin: "8px",
          }}
        >
          |
        </span>

        <ButtonBase
          onClick={handleOnNextClick} sx={{
            padding: "16px 0",
            color: '#707070',
            fontSize: '1.25rem',
            fontWeight: 'normal',
            textTransform: 'none',
          }}>
          Language
        </ButtonBase>
      </div>
    </Container>
  );
}

export default PageSignIn;
