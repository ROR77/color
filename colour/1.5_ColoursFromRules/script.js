
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


 'use strict';
// define 2 global variables
 var tileCountX = 50;
 var tileCountY = 10;

// Three arrays are defined to hold Hue, Saturation
// and Brightness values.
 var hueValues = [];
 var saturationValues = [];
 var brightnessValues = [];

 function setup() {
   // The canvas is set to fill the whole screen
   createCanvas(windowWidth, windowHeight);
   colorMode(HSB, 360, 100, 100, 100);
   noStroke();

   // init with random values
   // this is the default loop to produce an initial value
   for (var i = 0; i < tileCountX; i++) {
     hueValues[i] = random(360);
     saturationValues[i] = random(100);
     brightnessValues[i] = random(100);
   }
 }

 function draw() {
   // white back
   background(0, 0, 100);

   // limit mouse coordinates to canvas
   // constrain() will only return values within
   // the confines of the canvas
   var mX = constrain(mouseX, 0, width);
   var mY = constrain(mouseY, 0, height);

   // tile counter
   var counter = 0;

   // map mouse to grid resolution
   // the constrained mouse values are mapped to a variable
   // which is then used to calculate the width and height
   // of the tilesizes
   var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
   var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
   var tileWidth = width / currentTileCountX;
   var tileHeight = height / currentTileCountY;

   // set the origin of each tile
   for (var gridY = 0; gridY < tileCountY; gridY++) {
     for (var gridX = 0; gridX < tileCountX; gridX++) {
       var posX = tileWidth * gridX;
       var posY = tileHeight * gridY;
       var index = counter % currentTileCountX;

       // get component color values
       // the colour values are set for each tile
       fill(hueValues[index], saturationValues[index], brightnessValues[index]);
       rect(posX, posY, tileWidth, tileHeight);
       counter++;
     }
   }
 }

 function keyPressed() {
   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
   if (key == 'c' || key == 'C') {
     // -- save an ase file (adobe swatch export) --
     var colors = [];
     for (var i = 0; i < hueValues.length; i++) {
       colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
     }
     writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
   }
   //the whole range of values are used to populate the tiles
   if (key == '1') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = random(360);
       saturationValues[i] = random(100);
       brightnessValues[i] = random(100);
     }
   }

   if (key == '2') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = random(360);
       saturationValues[i] = random(100);
       brightnessValues[i] = 100;
     }
   }

   if (key == '3') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = random(360);
       saturationValues[i] = 100;
       brightnessValues[i] = random(100);
     }
   }
     // set values to greyscale
   if (key == '4') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = 0;
       saturationValues[i] = 0;
       brightnessValues[i] = random(100);
     }
   }
     // hue is fixed at blue but saturation and brightness vary
   if (key == '5') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = 195;
       saturationValues[i] = 100;
       brightnessValues[i] = random(100);
     }
   }

   if (key == '6') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = 195;
       saturationValues[i] = random(100);
       brightnessValues[i] = 100;
     }
   }
   // the hue range is constrained to the warmer colours
   if (key == '7') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = random(180);
       saturationValues[i] = random(80, 100);
       brightnessValues[i] = random(50, 90);
     }
   }
     // hues are taken from the second half of the colour
     // wheel
   if (key == '8') {
     for (var i = 0; i < tileCountX; i++) {
       hueValues[i] = random(180, 360);
       saturationValues[i] = random(80, 100);
       brightnessValues[i] = random(50, 90);
     }
   }
    // using the modulus(%) operator every second value
    // in each array is generated in a different way
    // in this case every second tile will contain a variation
    // of a blue hue
   if (key == '9') {
     for (var i = 0; i < tileCountX; i++) {
       if (i % 2 == 0) {
         hueValues[i] = random(360);
         saturationValues[i] = 100;
         brightnessValues[i] = random(100);
       } else {
         hueValues[i] = 195;
         saturationValues[i] = random(100);
         brightnessValues[i] = 100;
       }
     }
   }
      // the hue ranges are restricted to two values
   if (key == '0') {
     for (var i = 0; i < tileCountX; i++) {
       if (i % 2 == 0) {
         hueValues[i] = 140;
         saturationValues[i] = random(30, 100);
         brightnessValues[i] = random(40, 100);
       } else {
         hueValues[i] = 210;
         saturationValues[i] = random(40, 100);
         brightnessValues[i] = random(50, 100);
       }
     }
   }

 }
