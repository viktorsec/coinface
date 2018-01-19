function request(url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
}

Pebble.on('message', function(event) {
  request('https://api.coinmarketcap.com/v1/ticker/bitcoin/', "GET", function (response) {
    if (response) {
      const responseObject = JSON.parse(response);
      console.log("pkjs: sending message:", JSON.stringify(responseObject[0].price_usd));
      Pebble.postMessage({'price': responseObject[0].price_usd});
    }
  });
});