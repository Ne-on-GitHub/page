let w1;
let oosfeitwX=32;
let oosfeitwY=500;
let oosfeitwB=[];
let premX;
let premY;
let apremX;
let apremY;
let backX=0;
let backY=0;
let grf1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT,TOP);
  grf1=createGraphics(512,512);
  grf1.loadPixels();
  {
    let n=0;
    let w=grf1.width*8;
    let h=grf1.height*4;
    for(let y=0;y<grf1.height*4;y++){
      for(let x=0;x<grf1.width*8;x+=4){
        let norm=sqrt(sq(w/4))/255;
        let a=sqrt(sq(x/2-w/4)+sq(y*8-h/2))/norm;
        a=255-a;
        a*=2;
        if(a>255)a=255;
        grf1.pixels[n]=0
        grf1.pixels[n+1]=0
        grf1.pixels[n+2]=0
        grf1.pixels[n+3]=a;
        n+=4;
      }
    }
  }
  grf1.updatePixels();
}
function draw() {
  background(64);
  noFill();
  stroke(255);
  if(mouseIsPressed){
    backX=mouseX-premX;
    backY=mouseY-premY;
    backX+=apremX;
    backY+=apremY;
  }else{
    apremX=backX;
    apremY=backY;
    premX=mouseX;
    premY=mouseY;
  }
  if(backX<=-512)backX=-512;
  if(backX>=511)backX=511;
  if(backY<=-288)backY=-288;
  if(backY>=287)backY=287;
  w1=textWidth("Only one symbol for everything in this world.");
  let sin100ten=sin(frameCount/100)*10;
  let sin200ten=sin(frameCount/200)*10;
  oosfeitwX=sin100ten+32;
  oosfeitwY=sin(frameCount/50)*5+500;
  if(PI*600<=frameCount%(PI*800)&&frameCount%(PI*800)<=PI*800){
    let a=random(-sin100ten,sin100ten);
    let b=random(-sin100ten,sin100ten);
    oosfeitwB.push(new oosfeitwBall(random(oosfeitwX,oosfeitwX+w1),random(oosfeitwY,oosfeitwY+textAscent()+textDescent()),random(-1,1),random(-1,1)));
    if(sq(a)+sq(b)>50){
      oosfeitwX+=a;
      oosfeitwY+=b;
      oosfeitwB.push(new oosfeitwBall(random(oosfeitwX,oosfeitwX+w1),random(oosfeitwY,oosfeitwY+textAscent()+textDescent()),random(-1,1),random(-1,1)));
    }
    oosfeitwX+=a/3;
    oosfeitwY+=b/3;
  }
  let boosfeitwX=backX+oosfeitwX;
  let boosfeitwY=backY+oosfeitwY;
  oosfeitwB.push(new oosfeitwBall(random(oosfeitwX,oosfeitwX+w1),random(oosfeitwY,oosfeitwY+textAscent()+textDescent()),random(-1,1),random(-1,1)));
  for(let n=0;n<oosfeitwB.length;n++){
    if(oosfeitwB[n].life<=0){
      oosfeitwB.splice(n,1);
      n--;
    }else oosfeitwB[n].draw();
  }
  textSize(16);
  let pressed1=prs.of("squarelink1").in(boosfeitwX<=mouseX&&mouseX<=boosfeitwX+w1&&boosfeitwY<=mouseY&&mouseY<=boosfeitwY+textAscent()+textDescent());
  if(pressed1==0)fill(0,64,192,128);
  if(pressed1==1)fill(0,64,192);
  if(pressed1==3)fill(0,32,86);
  if(pressed1==4){
    fill(255);
    link("https://ne-on-github.github.io/page/ovagod/");}
  stroke(128);
  image(grf1,boosfeitwX-w1/2+52,boosfeitwY-56);
  text("Only one symbol for everything in this world.",boosfeitwX,boosfeitwY);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeighttextAscent()+textDescent());
}
function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
class oosfeitwBall{
  constructor(x,y,sx,sy){
    this.x=x;
    this.y=y;
    this.sx=sx;
    this.sy=sy;
    this.life=40;
    this.size=5;
  }
  draw(){
    noStroke();
    fill(0,this.life/20*255);
    circle(this.x+backX,this.y+backY,this.size);
    this.x+=this.sx*2;
    this.y+=this.sy*2;
    this.size+=0.5;
    this.life--;
  }
}
