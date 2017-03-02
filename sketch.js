var h;
var s;
var v;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  background();
  h=0;
  s=100;
  v=100;
}

function draw() {
  h +=1
  h%=360;
  background(244,235,66,5);
  fill(h,s,v);
  stroke(200,120,60);
  ellipse(mouseX,mouseY,100,100);
  ellipse(mouseX,mouseY,75,75);
  ellipse(mouseX,mouseY,50,50);
  ellipse(mouseX,mouseY,25,25);
}