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
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Generating the color spectrum by moving the mouse

//'use strict';

var stepX;
var stepY;

function setup(){
    createCanvas(800,400);
    //Hue is set within a range of 0-800 and
    // saturation is set to between 0-400.
    colorMode(HSB,width,height,100);
    noStroke();
}

function draw() {
  // the step of 20 ensures the smallest querySelector
  // will not go below 20 pixels
 stepX = mouseX + 20;
 stepY = mouseY + 20;

// in this outer for loop the value og gridY is
// incremented in steps of 20
 for (var gridY = 0; gridY < height; gridY += stepY) {
   // this inner loop determines the value for the
   // rectangles x position for each rectangle in turn
   for (var gridX = 0; gridX < width; gridX += stepX) {
     // Hue is defined by the gridX value
     // The Saturation value decreases with
     // increases in gridY
     fill(gridX, height - gridY, 100);
     // The value of the mouse position sets the
     // values of stepX and stepY
     rect(gridX, gridY, stepX, stepY);
   }
 }
}

function keyPressed() {
 if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
