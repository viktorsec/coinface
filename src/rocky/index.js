var rocky = require('rocky');
var price;

function addLeadingZero(str) {
  if (str.length === 1) {
    return '0' + str;
  }
  return str;
}

rocky.on('draw', function(event) {
  console.log("data", price);
  var ctx = event.context;
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  var d = new Date();
  var width = ctx.canvas.unobstructedWidth;
  var height = ctx.canvas.unobstructedHeight;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.font = '28px bold Gothic';
  var hours = addLeadingZero(d.getHours());
  var minutes = addLeadingZero(d.getMinutes());
  ctx.fillText('== ' + hours + ':' + minutes + ' ==', width/2, height/2 - 30, width);
  ctx.font = '24px Gothic';
  ctx.fillText('1 BTC = $' + price, width/2, height/2, width);
});

rocky.on('message', function(event) {
  console.log("rocky: received message:", JSON.stringify(event.data));
  price = Math.floor(event.data.price);
  rocky.requestDraw();
});

rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('hourchange', function(event) {
  console.log('requesting data');
  rocky.postMessage({'test': 'hello from smartwatch'});
});