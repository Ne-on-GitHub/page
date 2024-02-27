function setup(){
  createCanvas(windowWidth,windowHeight);
  textSize(128);
  fill(255);
}


function draw(){
  background(64);
  text("?",(sin(frameCount/100)*6+7)*width/15,(sin(frameCount/50)*2+4)*height/6.5);
}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
