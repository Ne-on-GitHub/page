let w1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(LEFT,TOP);
  w1=textWidth("Only one symbol for everything in this world.");
}
function draw() {
  background(64);
  noFill();
  stroke(0);
  let pressed1=prs.of("squarelink1").in(32<=mouseX&&mouseX<=32+w1&&100<=mouseY&&mouseY<=100+textAscent()+textDescent());
  if(pressed1==0)fill(192,128);
  if(pressed1==1)fill(192);
  if(pressed1==3)fill(86);
  if(pressed1==4){
    fill(255);
    link("https://ne-on-github.github.io/page/ovagod/");}
  stroke(128);
  text("Only one symbol for everything in this world.",32,100);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
