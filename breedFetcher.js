const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null); //calls callback function if error otherwise passed as null
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not found', null); //checks for breed error
      return;
    }
    callback(null, data[0]["description"]);
  });

};
module.exports = { fetchBreedDescription };