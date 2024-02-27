function setup() {
  createCanvas(windowWidth, windowHeight);
  pointer.set("s1",100,150,24,color(0,255,255));
  pointer.set("s2",150,100,24,color(0,0,255));
  pointer.set("s3",200,100,24,color(255,0,255));
  pointer.set("s4",250,200,24,color(255,0,0));
}
function draw() {
  background(192);
  pointer.draw();
  noFill();
  stroke(0);
  bezier(pointer.of("s1").x,pointer.of("s1").y,pointer.of("s2").x,pointer.of("s2").y,pointer.of("s3").x,pointer.of("s3").y,pointer.of("s4").x,pointer.of("s4").y);
  let pressed1=prs.of("squarelink1").in(300<=mouseX&&mouseX<=400&&100<=mouseY&&mouseY<=200);
  if(pressed1==0)fill(255,128,255,128);
  if(pressed1==1)fill(255,128,255);
  if(pressed1==3)fill(128,64,128);
  if(pressed1==4){
    fill(0);
    link("https://ne-on-github.github.io/page/ovagod/");}
  stroke(255,0,255);
  square(300,100,100);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
