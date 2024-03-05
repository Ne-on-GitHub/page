let page=0;
let paged=65536;
let lag=5;

let a,b,c;
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("touchmove",scrollKill,{passive:false});
  a=new index();
  b=new ovagod();
  c=new hsobahe();
}
function draw(){
  if(lag>0)lag--;
  else{
    if(page==0){
      if(paged!=0){
        a.setup();
        paged=0;}
      a.draw();}
    else if(page==1){
      if(paged!=1){
        b.setup();
        paged=1;}
      b.draw();}
    else if(page==2){
      if(paged!=2){
        c.setup();
        paged=2;}
      c.draw();}}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeighttextAscent()+textDescent());
}
function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
function scrollKill(e) {
  e.preventDefault();
}
class hsobahe{
  constructor(){
  }
  setup(){
  }
  draw(){
  }
}
