#!/usr/bin/env node
// libraries
const axios = require("axios");
const moment = require("moment");

// variables to hold date / time / offset
const today = moment().day(); 
const timeString = moment().format("HH:mm");
let offset = 0;

// Helper function to wait for user input for next page
const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', data => {
    const byteArray = [...data]
    if (byteArray.length > 0 && byteArray[0] === 3) {
      process.exit(1)
    }
    process.stdin.setRawMode(false)
    resolve()
  }))
}

// Run 
(async () => {
  let done = false;
  while (!done){
    // URL for this loop
    // query compares open time and closing time and day to the current time. 
    // The OR statement catches places that are already open but close after midnight which would give them a close time less than now
    // sort by name, limit to ten and a variable offset so we can page through
    const url = `https://data.sfgov.org/resource/jjew-r69b.json?$query=
      SELECT applicant AS NAME, location AS ADDRESS
      WHERE (start24<='${timeString}' AND end24>='${timeString}' AND dayorder=${today})
      OR (start24='${timeString}' AND end24<=start24 AND dayorder=${today})       
      ORDER BY NAME
      LIMIT 10
      OFFSET ${offset}`;

    axios.get(url, { headers: { Accept: "application/json" } })
    .then(res => {
      if(res.data.length < 10){
        done = true;
        if(res.data.length !== 0) console.log(res.data);
        console.log('Goodbye, Enjoy your meal!');
      } else {
        offset += 10;
        console.log(res.data);
        console.log('Press any key for 10 more or CTL c to quit');
      }
    })
    .catch(err => err);
    await keypress();
  }

})().then(process.exit)