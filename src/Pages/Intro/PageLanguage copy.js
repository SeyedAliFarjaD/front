import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";
import ArrowBack from "@mui/icons-material/ArrowBack";
import AccessTime from "@mui/icons-material/AccessTime";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import logo from "../../Assets/Images/Avatar.png";
import { countries } from "../../Countries";

import ReactCountryFlag from "react-country-flag";
import React from "react";

import { useNavigate } from 'react-router-dom';
import { ButtonBase } from "@mui/material";


const list = Object.keys(countries);
const list1 = list.slice(0, 22);

const list2 = list.slice(22, 46);
const list21 = list2.slice(0, list2.length / 2);
const list22 = list2.slice(list2.length / 2, list2.length);

const list3 = list.slice(46, 68);

function PageLanguage() {


  const navigate = useNavigate();
  function handleOnBackClick() {
    navigate(-1)
  }


  const [state, setState] = React.useState({
    currentCountry: "GB",
  });

  function handleOnNextClick(country) {
    setState({ ...state, currentCountry: country });
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ padding: "8px" }}>
      <Card
        sx={{
          padding: "16px",
          position: "relative",
          overflow: "visible",
          maxWidth: "800px",
          margin: "auto",
        }}
      >

        <Box display="flex" sx={{ mt: 1 }} alignItems="center">

          <div style={{
            textAlign: 'start',
            position: 'absolute'
          }}>

            <ButtonBase sx={{ height: "24px", display: { xs: 'block', sm: 'none' } }}
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

          <Typography
            sx={{
              color: "#707070",
              margin: "auto",
              fontSize: "20px"
            }}
          >
            Select Language
          </Typography>


        </Box>


        <Button
          size="small"
          sx={{
            flexDirection: "column",
            p: 2,
            alignItems: "center",
            overflow: "hidden",
            color: "#707070",
            mt: 2
          }}
        >
          <ReactCountryFlag
            countryCode={state.currentCountry}
            svg
            style={{
              width: "8em",
              height: "6em",
              margin: "4px",
              borderRadius: "6px",
              objectFit: "cover",
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            title={state.currentCountry}
          />

          <span
            style={{
              fontSize: "1em",
              whiteSpace: "nowrap",
            }}
          >
            {countries[state.currentCountry]}
          </span>
        </Button>

        <Box className="scroll__container" sx={{ maxHeight: '40vh', mt: 1 }}>
          <List sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {list.map((country) => (
              <Button
                key={country}
                size="small"
                onClick={() => { handleOnNextClick(country) }}
                sx={{
                  flexDirection: "column",
                  p: "2",
                  width: "72px",
                  height: "72px",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "#707070",
                  background: country == state.currentCountry ? "#006FFF44" : ""
                }}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "4em",
                    height: "3em",
                    margin: "4px",
                    borderRadius: "6px",
                    objectFit: "cover",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                  title={country}
                />

                <span
                  style={{
                    fontSize: "0.6em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {countries[country]}
                </span>
              </Button>
            ))}
          </List>
        </Box>

        {/* <div style={{ display: "flex" }}>
          <List sx={{ display: "flex", flexWrap: "wrap", flex: "1" }}>
            {list21.map((country) => (
              <Button
                key={country}
                size="small"
                sx={{
                  flexDirection: "column",
                  p: "2",
                  width: "70px",
                  height: "70px",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "#707070",
                }}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "4em",
                    height: "3em",
                    margin: "4px",
                    borderRadius: "6px",
                    objectFit: "cover",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                  title={country}
                />

                <span
                  style={{
                    fontSize: "0.5em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {countries[country]}
                </span>
              </Button>
            ))}
          </List>

          <div style={{ flex: "1.3333333333 1 0%" }}>
            <Button
              key={"GB"}
              sx={{
                flexDirection: "column",
                p: "2",
                color: "#707070",
                height: "100%",
              }}
            >
              <ReactCountryFlag
                countryCode={"GB"}
                svg
                style={{
                  width: "16em",
                  height: "12em",
                  margin: "4px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  boxShadow:
                    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                }}
                title={"GB"}
              />

              <span
                style={{
                  fontSize: "1.5em",
                  whiteSpace: "nowrap",
                  marginTop: "8px",
                }}
              >
                {countries["GB"]}
              </span>
            </Button>
          </div>

          <List sx={{ display: "flex", flexWrap: "wrap", flex: "1" }}>
            {list22.map((country) => (
              <Button
                key={country}
                size="small"
                sx={{
                  flexDirection: "column",
                  p: "2",
                  width: "70px",
                  height: "70px",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "#707070",
                }}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "4em",
                    height: "3em",
                    margin: "4px",
                    borderRadius: "6px",
                    objectFit: "cover",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                  title={country}
                />

                <span
                  style={{
                    fontSize: "0.5em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {countries[country]}
                </span>
              </Button>
            ))}
          </List>
        </div>

        <div>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            {list3.map((country) => (
              <Button
                key={country}
                size="small"
                sx={{
                  flexDirection: "column",
                  p: "2",
                  width: "70px",
                  height: "70px",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "#707070",
                }}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "4em",
                    height: "3em",
                    margin: "4px",
                    borderRadius: "6px",
                    objectFit: "cover",
                    boxShadow:
                      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  }}
                  title={country}
                />

                <span
                  style={{
                    fontSize: "0.5em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {countries[country]}
                </span>
              </Button>
            ))}
          </List>
        </div> */}

        <Button
          type="submit"
          variant="contained"
          sx={{
            pr: 10,
            pl: 10,
            mt: 3,
            borderRadius: "108px",
            minWidth: "128px",
            height: "48px"
          }}
        >
          Change Language
        </Button>
      </Card>
    </Container>
  );
}

export default PageLanguage;
