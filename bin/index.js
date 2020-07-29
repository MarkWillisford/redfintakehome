#!/usr/bin/env node
const axios = require("axios");
const moment = require("moment");

const today = moment().day(); // moment.utc().format("LLLL");
const timeString = moment().format("HH:mm");

console.log(timeString);

//const url = `https://data.sfgov.org/resource/jjew-r69b.json?$where=start24<='${timeString}' AND end24>='${timeString}' AND dayorder=${today} `;

//const url = 'https://soda.demo.socrata.com/resource/earthquakes.json?'
//const url = `https://soda.demo.socrata.com/resource/earthquakes.json?limit=5&limit=5&limit=5&offset=0`;
// const url = `https://data.sfgov.org/resource/jjew-r69b.json?$where=end24<=start24`;
// const url = `https://data.sfgov.org/resource/jjew-r69b.json?$select=applicant, location`;
const url = `https://data.sfgov.org/resource/jjew-r69b.json?$query=
  SELECT applicant AS NAME, location AS ADDRESS
  WHERE start24<='${timeString}' AND end24>='${timeString}' AND dayorder=${today}
  ORDER BY NAME
  LIMIT 5
  OFFSET 5`;




axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    
    console.log( res.data );
  });

console.log(  );