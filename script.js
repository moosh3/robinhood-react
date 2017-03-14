var API_URL = 'https://api.robinhood.com/';

function apiRequest(symbol) {
  let url = API_URL + `quotes/${symbol}/`;
  (async() => {
    try {
      var response = await fetch(url);
      var data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("Booo")
    }
  })();
  
apiRequest('AAPL');
