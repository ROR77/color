'use strict';

var colorLeft = [];
var colorRight = [];
var myColor;

var numberOfRows = 5;
var numberOfCols = 5;



function setup(){
         createCanvas(800,800);
         colorMode(HSB);
         noStroke();
         //shakeColors();
         var tileWidth  = width/numberOfCols;

}

function draw(){

  var tileCountX;
  var tileCountY;

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for(var gridY = 0; gridY < tileCountY; gridY++){

  }



function shakeColors(){

for(var i = 0; i < numberOfRows; i ++){

    var randomColor = color(random(0,255), random(0,255), random(0,255))
    colorLeft.push(randomColor);
    var randomColor2 = color(random(0,255), random(0,255), random(0,255))
    colorRight.push(randomColor)
    console.log(colorLeft);
  }
  fill (colorLeft [0]);
  rect(0,0,tileWidth,tileHeight);
    }
  }
