var rocky = require('rocky');
var price;

rocky.on('draw', function(event) {
  console.log("data", price);
  var ctx = event.context;
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  var d = new Date();
  var width = ctx.canvas.unobstructedWidth;
  var height = ctx.canvas.unobstructedHeight;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(                    d.toLocaleTimeString() + '                                                 1 BTC = $' + price, width/2, height/2, width);
});

rocky.on('message', function(event) {
  console.log(JSON.stringify(event.data));
  price = event.data.price;
  rocky.requestDraw();
});

rocky.on('minutechange', function(event) {
  console.log('requesting data');
  rocky.postMessage({'test': 'hello from smartwatch'});
});