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

function setup(){
         createCanvas(720,720);
         colorMode(HSB,360,100,100);
         rectMode(CENTER);
         noStroke();

}

var john = "name";

function draw(){
//The background hue is set with the vertical
// movement of the mouse on the Y axis. Since
// the canvas is 720 pixels a range between 1-360
// will be returned, so the full colour spectrum
// is covered when the mouse is moved from the
// bottom to the top of the canvas.
    background(mouseY/2,100,100);
// the full hue range is available to fill the
// rect when the mouse is moved on a diagonal
    fill(360-mouseY/2,100,100);
// the rect is drawn from the centre of the canvas
//  outwards, both its dimensions are determined
// by the mouseX position sizing it between 1 and 720
// and making it a square at all sized.
    rect(width/2,height/2,mouseX,mouseX);

}
// this function saves a local copy of the canvas
function keyPressed(){
    if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
    //gd is the generative design library
}
