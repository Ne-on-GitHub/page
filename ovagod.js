
class ovagod{
  constructor(){
    this.a=0;
    this.frame;
  }
  draw(){
    let a=this.a;
    let frame=this.frame;
    background(64);
    push();
    fill(255);
    textSize(sin(frame/5)*64+128);
    translate((sin(frame/100)*6+7)*width/15,(sin(frame/50)*2+3)*height/6.5);
    rotate(sin(frame/15)*3);
    textAlign(LEFT,CENTER);
    text("?",0,0);
    textSize(16);
    pop();
    textAlign(CENTER,CENTER);
    if(frame>700){
      if(a<1200)a+=2;
      noStroke();
      let lx=textWidth("Wow! This world is full of mysteries ;-)");
      let ly=textAscent()+textDescent();
      let pressedtwifom=prs.of("twifomlink").in((width-lx)/2<=mouseX&&mouseX<=(width+lx)/2-textWidth(" ;-)")&&(height-ly)/2<=mouseY&&mouseY<=(height+ly)/2);
      if(a<32)pressedtwifom=0;
      if(pressedtwifom==0)fill(255,a/2);
      if(pressedtwifom==1)fill(64,128,255,a/2);
      if(pressedtwifom==2||pressedtwifom==3)fill(32,64,128,a/2);
      if(pressedtwifom==4){
        fill(255);
        page=0;
        lag=60;}
      text("Wow! This world is full of mysteries",width/2-textWidth(" ;-)")/2,height/2);
      fill(255,a/2);
      text(";-)",(width+lx-textWidth(";-)"))/2,height/2);
    }
    frame++;
    this.a=a;
    this.frame=frame;
  }
  setup(){
    this.a=0;
    this.frame=0;
  }
}
