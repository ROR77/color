function setup(){
         createCanvas(720,720);
         colorMode(HSB,360,100,100);
         rectMode(CENTER);
         noStroke();

}

var john = "name";

function draw(){
    
    background(mouseY/2,100,100);
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX,mouseX);

}

function keyPressed(){
    if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
    //gd is the generative design library
}