// P_1_2_2_01
//
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

/**
 * extract and sort the color palette of an image
 *
 * MOUSE
 * position x          : resolution
 *
 * KEYS
 * 1-4                 : load different images
 * 5                   : no color sorting
 * 6                   : sort colors on hue
 * 7                   : sort colors on saturation
 * 8                   : sort colors on brightness
 * 9                   : sort colors on greyscale (luminance)
 * s                   : save png
 * c                   : save color palette
 */
'use strict';

var img;
var colors = [];
var sortMode = null;

// the preload function is an asynchronous function
// which is blocking until any calls which it makes
// are finished loading. Here it is defined before
// the setup function, and setup() will not execute
// until any call made within preload() has finished.
function preload() {
  // the loadImage() method is supplied with a path
  // to the required image, where it loads it from.
  // To ensure the image is completely loaded before
  // been used the function is placed within preload().
  img = loadImage('data/pic1.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
// Floor  Calculates the closest int value that is less than
// or equal to the value of the parameter passed to it.
// The value which floor will operate on is a calculated value
// which is the width of the canvas divided by whichever is The
// greater mouseX or 5. With a canvas width of 600 this will ensure
// tileCount does rise above a value more than 120 pixels.
  var tileCount = floor(width / max(mouseX, 5));
  // the size of the rectangles are calculated based on the tileCount
  // variable. When the mouse is on the left side of the canvas the
  // rectangles will be at their smallest because in this position
  // tileCount is at its highest where 600/120 will evaluate to the
  // rectangle size.
    var rectSize = width / tileCount;

   // the individual pixels in the image are loaded into
   // the pixels attribute of img.
  img.loadPixels();
  colors = [];

 // this loop is establishing the rectangular sizes into
 // which the colors need to be pushed
 // since tileCount is dependent on mouseX movement gridX and
 // gridY stop been incremented as soon as the mouse stops moving
 // and therefore the retangular size stabilises
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
// the colors from the original image are been extracted in groups of 4
// and been pushed to the colors array
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  // colors and sortMode are program defined variables
  // which are passed to the gd libraries sortColors method.
  // the colors array is passed as an argument and the desired
  // mode with which to sort the colors is also passed as an
  // argument
  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  // a file is created which is suitable for Photoshop use
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
// different images are loaded depending on user interaction with keyboard
  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');
// the user can select different types of modes with
// which to sort the colors
  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
