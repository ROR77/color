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

'use strict';

var segmentCount = 360;
var radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  // mouse co-ordinates are used for saturation
  // and brightness values
  colorMode(HSB, 360, width, height);
  background(360, 0, height);

// the increase in the angle depends on how many
// segments are going to be drawn
  var angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  // the first vertex point is in the middle of canvas
  vertex(width / 2, height / 2);

  // the loop sets the remaining two vertices for
  // each fan shape with the number of fan shapes
  // drawn determined by the size of the angleStep
  for (var angle = 0; angle <= 360; angle += angleStep) {
    // the radians function converts degrees
    // to radians as both the cos and sin functions
    // work with radians.
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    // the individual fan shapes can now be drawn With
    // the calculated vertices
    vertex(vx, vy);
    // saturation increases with positive movement of the
    // mouse on the x axis and brighness with positive
    // movement on the y axis.
    fill(angle, mouseX, mouseY);
  }

  endShape();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

// depending on which key is pressed the segment
// size can be changed
  switch (key) {
  case '1':
    segmentCount = 360;
    break;
  case '2':
    segmentCount = 45;
    break;
  case '3':
    segmentCount = 24;
    break;
  case '4':
    segmentCount = 12;
    break;
  case '5':
    segmentCount = 6;
    break;
  }
}
