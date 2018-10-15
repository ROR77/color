function setup(){
         createCanvas(500,500);
         colorMode(HSB,width,height,100);
        // rectMode(CENTER);
         noStroke();

}

function draw(){
    
   // background(mouseY/2,100,100);
    
    numberOfCols = mouseX + 1;
    numberOfRows = mouseY + 1;
    var stepX = width/numberOfCols;
    var stepY =  width/numberOfRows;
    
    for(var gridY = 0;gridY < height; gridY += stepY){
    for(var gridX = 0;gridX < width; gridX += stepX){
           fill(gridX,height-gridY,100);
          rect(gridX,gridY,stepX,stepY);
        }
    }

}

function keyPressed(){
    if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
    //gd is the generative design library
}