#!/usr/bin/env node
const axios = require("axios");

const url = "https://data.sfgov.org/resource/jjew-r69b";
const currentDate = new Date();

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    console.log( res.data );
  });

console.log( currentDate );