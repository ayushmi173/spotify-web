const axios = require("axios").default;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookie = require("cookie-parser");

// let CLIENT_ID = process.env.CLIENT_ID;
// let CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
// const SCOPES = process.env.SCOPES;
// const PORT = process.env.PORT;
// console.log("nnnnnnnnnnnnnnnn " + CLIENT_ID);
// console.log();

app.use(cors());
app.use(cookie());

const CLIENT_ID = "1a5d0e8aa1f94f1291fd968154e6569b";
const CLIENT_SECRET = "de2a61c1ffe8477189766b63f5159f78";
const REDIRECT_URI = "http://localhost:5000/callback";
const SCOPES = encodeURIComponent("user-read-private user-read-email");
const PORT = 5000;
let access_token = "";
let refresh_token = "";

const generateToken = async (code) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const tokens = response.data;
    access_token = tokens.access_token;
    refresh_token = tokens.refresh_token;
    return tokens;
  } catch (error) {
    return error;
  }
};

const getMe = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

const getNewRelease = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/browse/new-releases",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        country: "IN",
        limit: 50,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};

app.get("/health", function (req, res) {
  res.send("Health Checkup Is Working");
});

app.get("/login", function (req, res) {
  return res.send(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(
      SCOPES
    )}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`
  );
});

app.get("/releases", async function (req, res) {
  res.send(await getNewRelease());
});

app.get("/callback", async function (req, res) {
  let code = req.query.code || null;
  if (code === null) res.redirect("/error");

  const tokens = await generateToken(code);
  res.cookie("access-token", access_token);
  res.cookie("refresh-token", refresh_token);
  if (tokens) {
    const response = await getMe();
    res.cookie("user", response.data);
    res.send("<script>window.close()</script>");
  }
});

app.listen(PORT, () => {
  console.log(`Serve is up and running at the port ${PORT}`);
});
