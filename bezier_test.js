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
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
