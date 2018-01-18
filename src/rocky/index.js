var rocky = require('rocky');

rocky.on('draw', function(event) {
  var ctx = event.context;
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  var d = new Date();
  var width = ctx.canvas.unobstructedWidth;
  var height = ctx.canvas.unobstructedHeight;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(d.toLocaleTimeString(), width/2, height/2, width);
});

rocky.on('minutechange', function(event) {
  console.log('minute passed');
  rocky.requestDraw();
});