'use strict';


function setup(){
         createCanvas(800,400);
         colorMode(HSB,360,100,100);
         noStroke();


}

function draw(){

  background(0,100,100);
  var angle = 0;
  var numberOfSteps = map(mouseY,0,height,11,360);
  var angleIncrement = 360/numberOfSteps;
  var radius = 200;

  beginShape(TRIANGLE_FAN);

  vertex(width / 2, height / 2);

  for(var angle=0; angle <= 360; angle=angle+angleIncrement){
       var vx = radius * cos(radians(angle)) + width/2;
      var vy = radius * sin(radians(angle)) + height/2;
      fill(angle, 100, 100);
      vertex(vx,vy);
  }
  endShape();
}
