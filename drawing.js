

var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 400;

var x3 = 400;
var x4 = 400;
var y3 = 0;
var y4 = 400;

function setup() {
  // Create the canvas
  	createCanvas(400, 400);
  	background(255);
	stroke(50);
	fill(100);
  
}

function draw() {
	y2 -= 5;
	x1 += 5;
	line(x1,y1,x2,y2);

	y3 += 5;
	x4 -= 5;
	line(x3,y3,x4,y4);
}



