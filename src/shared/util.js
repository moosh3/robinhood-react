// @flow

/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';

export function checkResponse(myRequest) {
// Check for JSON response
  fetch(myRequest).then(checkResponse(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) { // eslint-disable no-unused-vars
        // process your JSON further
      });
  );
}
