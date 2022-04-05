function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[0]);
  ball.x = ball.x + ball.vellocity_x

}

var ball = {
x : 30,
y : 30,
vellocity_x : 3,
vellocity_y : 0,
r : 30,
color : ["orange","red","yellow","green"]
}