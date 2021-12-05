const request = require('request')
const fs = require('fs');
// to filter out and only return the arguments after calling node fetcher.js
const commandLineArgument = process.argv.slice(2);
const breed = commandLineArgument[0];



const fetcher = function () {
  const catUrl=`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`
  console.log('breed:',breed)
  request(catUrl, function (error, response, body) {
    if(error){
      console.log(error)
      return;
    }
    const data = JSON.parse(body);
    if(data.length === 0){
        console.log("Invalid Entry")
        return;
    }
    console.log('body:', data[0].breeds[0].description); 
   
  })}
  fetcher();