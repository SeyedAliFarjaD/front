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

const list = Object.keys(countries);
const list1 = list.slice(0, 22);

const list2 = list.slice(22, 46);
const list21 = list2.slice(0, list2.length / 2);
const list22 = list2.slice(list2.length / 2, list2.length);

const list3 = list.slice(46, 68);

function PageLanguage() {
  function handleOnNextClick(params) {
    toast("clicked");
  }

  return (
    <Container component="main" className="TextField-with-border-radius">
      <Card
        sx={{
          padding: "16px",
          position: "relative",
          overflow: "visible",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "start",
            minWidth: "364px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleOnNextClick}
            sx={{
              color: "#000000",
              backgroundColor: "#ffa200",
              borderRadius: "108px",
              minHeight: "48px",
            }}
          >
            <ArrowBack
              sx={{
                color: "#000000",
                marginRight: "4px",
                height: "16px",
                width: "16px",
              }}
            />
            Back
          </Button>
        </div>

        <Typography
          sx={{
            mt: 4,
            color: "#707070",
            position: "absolute",
            width: "100%",
            top: "0",
            left: "0",
          }}
        >
          Select Language
        </Typography>

        <div>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            {list1.map((country) => (
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

        <div style={{ display: "flex" }}>
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
        </div>

        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={handleOnNextClick}
          sx={{
            pr: 10,
            pl: 10,
            mt: 3,
            mb: 1,
            borderRadius: "108px",
            minHeight: "",
            minWidth: "128px",
          }}
        >
          Change Language
        </Button>
      </Card>
    </Container>
  );
}

export default PageLanguage;
