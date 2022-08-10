import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../Assets/Images/CommingSoonPic.svg";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { Card } from "@mui/material";

window.axios = axios
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function PageAxiosTest() {
  const [state, setState] = React.useState({
    imgUrl: "",
  });


  //Minimum eight characters, at least one letter and one number:
  //ake_id: "202209891616"
  //4ee5895c95c937fa98b4060bf9fa0f1634b294bf6694bd8ef2ff4f19b0b98e303463652d11b1ca9dc62b45e6b622edaf7298d87e202209891616
  // email = r'[^@]+@[^@]+\.[^@]+',
  // phone = r'^\+\d{7}\d+',
  // password = r'^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',
  // year = datetime.utcnow().strftime('%Y')
  // ccc = country(country_code).json  # country calling code
  // rnd = str(randint(10000,99999))
  // new = year + country(country_code + rnd

  const test = () => {
    axios.post(`https://peymoon.com/auth/login`, {
      "username": "seyedali.farjad@gmail.com",
      "password": "fw123fw123"
    })
      .then((res) => {

      })
      .catch((error) => {

      });
  }

  const test3 = () => {
    axios.post(`https://peymoon.com/auth/register`, {
      "firstname": "Ali",
      "lastname": "Farjad",
      "email": "seyedali.farjad@gmail.com",
      "phone": "+989393013397",
      "password": "fw123fw123",
      "country": "IR"
    })
      .then((res) => {

      })
      .catch((error) => {

      });
  }

  const test2 = () => {
    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   const persons = res.data;
    // });

    axios
      .get(`https://jsonplaceholder.typicode.com/albums/1/photos`, {
        timeout: 200,
      })
      .then((res) => {
        setState({
          ...state,
          imgUrl: res.data[parseInt(Math.random() * res.data.length)].url,
        });
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          toast.error("timeouted!");
        }

        console.table(error.code === "ECONNABORTED");
        console.table(error);
      });
  };

  return (
    <Container component="main">
      <Typography
        sx={{ color: "#707070", marginBottom: "8px" }}
        component="h1"
        variant="h6"
        onClick={test}
      >
        We are testing the system
      </Typography>

      <Card
        sx={{
          borderRadius: "50%",
          width: "144px",
          height: "144px",
          position: "absolute",
          mt: 4,
        }}
      >
        <img
          src={state.imgUrl}
          className="App-logo"
          alt="logo"
          style={{
            width: "100%",
            height: " 100%",
            objectFit: "none",
          }}
        />
      </Card>
    </Container>
  );
}

export default PageAxiosTest;
