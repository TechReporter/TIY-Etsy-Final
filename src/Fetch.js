// Fetch.js

// This file should be imported to access all of the necessary fetches using methods, to make the rest of the code less redundant and improve readability.

export default class Fetch {
  // use listings/:id endpoint
  getListing(listingId) {
    // make the fetch URL
    let fetchURL =
      'https://openapi.etsy.com/v2/listings/' +
      listingId +
      '?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and return the json
    fetch(fetchURL)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        return response;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

