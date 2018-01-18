function request(url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
}

Pebble.on('message', function(event) {
  request('https://blockchain.info/q/24hrprice', "GET", function (response) {
    Pebble.postMessage({'price': response})
  });
});