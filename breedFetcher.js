const request = require('request');

let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  try {
    if (error) {
      throw error;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      throw new Error('Breed not found');
    }
    console.log(data[0]["description"]);
  } catch (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
  }
  //console.log(typeof body);
  //console.log('body:', body);
  //console.log(typeof data);
});