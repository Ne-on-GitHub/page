class index{
  constructor(){
    this.w1;
    this.oosfeitwX=32;
    this.oosfeitwY=500;
    this.oosfeitwB=[];
    this.premX;
    this.premY;
    this.apremX;
    this.apremY;
    this.backX=0;
    this.backY=0;
    this.pmouseIsPressed;
    this.grf1;
    this.frame;
    this.skele=loadImage("data/skeleneon.png");
    this.skeleneon=createImage(110,240);
  }
  setup(){
    textAlign(LEFT,TOP);
    let grf1=createGraphics(768,768);
    grf1.loadPixels();
    {
      let w=grf1.width*pixelDensity();
      let h=grf1.height*pixelDensity();
      for(let y=0;y<h;y++){
        for(let x=0;x<w;x++){
          let r=sqrt(sq(w/2-x)/16+sq(h/2-y))*2048/w;
          if(r>255)r=255;
          r=255-r;
          let n=4*(y*w+x);
          grf1.pixels[n]=r/2;
          grf1.pixels[n+1]=0;
          grf1.pixels[n+2]=0;
          grf1.pixels[n+3]=r;
        }
      }
    }
    grf1.updatePixels();
    this.grf1=grf1;
    this.skele.loadPixels();
    this.skeleneon.loadPixels();
    for(let y=0;y<this.skeleneon.height;y++)for(let x=0;x<this.skeleneon.width*4;x++)for(let n=0;n<4;n++)this.skeleneon.pixels[4*(y*this.skeleneon.width+x)+n]=this.skele.pixels[4*(floor(this.skele.height/this.skeleneon.height*y)*this.skele.width+floor(this.skele.width/this.skeleneon.width*x))+n];
    this.skeleneon.updatePixels();
    this.frame=0;
  }
  draw(){
    background(0,0,0);
    this.touchmove();
    this.oosfeitw();
    this.skeleneond();
    this.densitydebug();
    this.frame++;
  }
  touchmove(){
    let pmouseIsPressed=this.pmouseIsPressed;
    let backX=this.backX;
    let backY=this.backY;
    let premX=this.premX;
    let premY=this.premY;
    let apremX=this.apremX;
    let apremY=this.apremY;
    if(!mouseIsPressed)pmouseIsPressed=false;
    if(pmouseIsPressed){
      backX=mouseX-premX;
      backY=mouseY-premY;
      backX+=apremX;
      backY+=apremY;
    }else{
      apremX=backX;
      apremY=backY;
      premX=mouseX;
      premY=mouseY;
      if(mouseIsPressed)pmouseIsPressed=true;
    }
    if(backX<=-512)backX=-512;
    if(backX>=511)backX=511;
    if(backY<=-188)backY=-188;
    if(backY>=387)backY=387;
    this.pmouseIsPressed=pmouseIsPressed;
    this.backX=backX;
    this.backY=backY;
    this.premX=premX;
    this.premY=premY;
    this.apremX=apremX;
    this.apremY=apremY;
  }
  skeleneond(){
    push();
    translate(this.backX+300+sin(this.frame/113)*20+cos(this.frame/1800)*500,this.backY-100+sin(this.frame/59)*10-sin(this.frame/1800)*100);
    rotate(sin(this.frame/31)/10);
    image(this.skeleneon,-this.skeleneon.width/2,-this.skeleneon.height/2);
    pop();
  }
  oosfeitw(){
    let w1=this.w1;
    let oosfeitwX=this.oosfeitwX;
    let oosfeitwY=this.oosfeitwY;
    let oosfeitwB=this.oosfeitwB;
    let backX=this.backX;
    let backY=this.backY;
    let grf1=this.grf1;
    let frame=this.frame;
    noFill();
    stroke(255);
    w1=textWidth("Only one symbol for everything in this world.");
    let sin100ten=sin(frame/100)*10;
    let sin200ten=sin(frame/200)*10;
    oosfeitwX=sin100ten+32;
    oosfeitwY=sin(frame/50)*5+500;
    if(PI*600<=frame%(PI*800)&&frame%(PI*800)<=PI*800){
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
      }else oosfeitwB[n].draw(backX,backY);
    }
    textSize(16);
    let pressed1=prs.of("squarelink1").in(boosfeitwX<=mouseX&&mouseX<=boosfeitwX+w1&&boosfeitwY<=mouseY&&mouseY<=boosfeitwY+textAscent()+textDescent());
    stroke(255)
    if(pressed1==0)fill(64,128,255,128);
    if(pressed1==1)fill(64,128,255);
    if(pressed1==3)fill(32,64,128);
    if(pressed1==4){
      fill(255);
      page=1;
      lag=30;}
    stroke(128);
    image(grf1,backX-w1/2-48,backY+126);
    text("Only one symbol for everything in this world.",boosfeitwX,boosfeitwY);
    this.w1=w1;
    this.oosfeitwX=oosfeitwX;
    this.oosfeitwY=oosfeitwY;
    this.oosfeitwB=oosfeitwB;
    this.backX=backX;
    this.backY=backY;
    this.grf1=grf1;
  }
  densitydebug(){
    let bx=this.backX;
    let by=this.backY;
    stroke(0);
    if(pixelDensity()==1){
      line(bx+600,by+75,bx+620,by+220);
    }
    if(pixelDensity()==2){
      line(bx+585,by+85,bx+630,by+65);
      line(bx+615,by+70,bx+655,by+80);
      line(bx+655,by+75,bx+660,by+90);
      line(bx+665,by+85,bx+580,by+210);
      line(bx+575,by+205,bx+685,by+215);
      line(bx+680,by+210,bx+685,by+230);
    }
    if(pixelDensity()==3){
      line(sq(random(20))*random(1,-1)+632+bx,sq(random(20))*random(1,-1)+150+by,sq(random(20))*random(1,-1)+632+bx,sq(random(20))*random(1,-1)+150+by);
    }
    if(pixelDensity()>3){
      for(let n=0;n<16;n++){
        line(sq(random(20))*random(1,-1)+632+bx,sq(random(20))*random(1,-1)+150+by,sq(random(20))*random(1,-1)+632+bx,sq(random(20))*random(1,-1)+150+by);
      }
    }
  }
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
  draw(x,y){
    noStroke();
    fill(128,0,0,this.life/20*255);
    circle(this.x+x,this.y+y,this.size);
    this.x+=this.sx*2;
    this.y+=this.sy*2;
    this.size+=0.5;
    this.life--;
  }
}
