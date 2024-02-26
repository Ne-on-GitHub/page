/*
pointer.set(name,x,y,size,color);
pointer.of(name).x
pointer.of(name).y
pointer.draw();
*/

class pointers{
  constructor(){
    this.point=[];
    this.dict=[];
  }
  
  set(st,x,y,s,c){
    this.point.push(new setpoint(x,y,s,c));
    this.dict.push(st);
  }
  
  of(s){
    for(let n=0;n<this.dict.length;n++)if(s==this.dict[n])return this.point[n];
    return null;
  }
  
  draw(){
    let pressonly=false;
    for(let n=0;n<this.point.length;n++){
      this.point[n].draw();
    }
    for(let n=0;n<this.point.length;n++){
      if(this.point[n].pressed){
        if(!pressonly)pressonly=true;
        else this.point[n].pressed=false;
      }
    }
  }
}
class setpoint{
  constructor(x,y,s,c){
    this.x=x;
    this.y=y;
    this.px=x;
    this.py=y;
    this.s=s;
    this.c=c;
    this.nc=color(red(c)/2,green(c)/2,blue(c)/2);
    this.pressed=false;
    this.delayPressed=false;
  }
  draw(){
    noStroke();
    if(mouseIsPressed&&!this.delayPressed){
      if(sq(mouseX-this.x)+sq(mouseY-this.y)<sq(this.s/2.0)){
        this.pressed=true;
        this.px=this.x-mouseX;
        this.py=this.y-mouseY;
      }
      this.delayPressed=true;
    }
    if(!mouseIsPressed&&this.delayPressed){
      this.pressed=false;
      this.delayPressed=false;
    }
    if(this.pressed){
      fill(this.nc);
      this.x=mouseX+this.px;
      this.y=mouseY+this.py;
    }else{
      if(sq(mouseX-this.x)+sq(mouseY-this.y)<sq(this.s/2.0)){
        fill(this.c);
      }else{
        fill(red(this.c),green(this.c),blue(this.c),128);
      }
    }
    circle(this.x,this.y,this.s);
  }
}
let pointer=new pointers();
