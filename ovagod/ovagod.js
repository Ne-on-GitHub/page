function setup(){
  createCanvas(windowWidth,windowHeight);
  fill(255);
}


function draw(){
  background(64);
  textSize(sin(frameCount/5)*64+128);
  translate((sin(frameCount/100)*6+7)*width/15,(sin(frameCount/50)*2+3)*height/6.5);
  rotate(sin(frameCount/15)*3);
  text("?",0,0);
}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
