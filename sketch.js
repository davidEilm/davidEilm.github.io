var w = 40;
var numOfBlocksInRow = 15;

var start1 = 0;
var start2 = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  //ortho(-width/1.3, width/1.3, -height/1.3, height/1.3, -600, 600);
}

function draw() {
  background(0);
  stroke(255);
  fill(0);

  translate(0, 0, -500); //To view the simulation in orthographic-view, replace -500 in this line with width/2, and uncomment the ortho(...) line in setup().
  rotateX(radians(-25));
  rotateY(PI/4);

  //Shows the center
  //fill(255, 0, 0);
  //ellipse(0, 0, 20, 20);
  //fill(200);
  
  var s1 = start1;
  for (var x=0; x < numOfBlocksInRow; x++) {
    var s2 = start2;
    for (var z=0; z < numOfBlocksInRow; z++) {
      push();

      translate(x*w, 0, z*w);
      translate(-(numOfBlocksInRow*w/2) + w/2, 0, -(numOfBlocksInRow*w/2) + w/2);
      scale(1, map(sin(s1) + sin(s2), -2, 2, 1, 5), 1);
      box(w);

      pop();
      s2 += 0.3; //waviness
    }
    s1 += 0.3; //waviness
  }
  start1 += 0.05; //speed
  start2 += 0.05; //speed
}