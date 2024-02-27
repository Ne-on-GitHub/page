let a=64;
function setup(){
  createCanvas(windowWidth,windowHeight);
}


function draw(){
  background(64);
  push();
  fill(255);
  textSize(sin(frameCount/5)*64+128);
  translate((sin(frameCount/100)*6+7)*width/15,(sin(frameCount/50)*2+3)*height/6.5);
  rotate(sin(frameCount/15)*3);
  textAlign(LEFT,CENTER);
  text("?",0,0);
  textSize(16);
  pop();
  textAlign(CENTER,CENTER);
  if(frameCount>1500){
    fill(a,128);
    if(a<128)a++;
    text("Wow! This world is full of mysteries ;-)",width/2,height/2);
  }
}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
