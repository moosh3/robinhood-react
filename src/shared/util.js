// @flow

/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';

// Check for JSON response
fetch(myRequest).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});
