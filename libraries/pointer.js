/*
pointer.set(name,x,y,size,color);
pointer.of(name).x
pointer.of(name).y
pointer.draw();
*/

class pointers{
  constructor(){
    this.point=[];
    this.dict=[];}
  set(st,x,y,s,c){
    this.point.push(new setpoint(st,x,y,s,c));
    this.dict.push(st);}
  of(s){
    for(let n=0;n<this.dict.length;n++)if(s==this.dict[n])return this.point[n];
    return null;}
  draw(){
    let pressonly=false;
    for(let n=this.point.length-1;n>=0;n--){
      this.point[n].draw();}
    for(let n=0;n<this.point.length;n++){
      if(prs.of(this.point[n].name).pressed){
        if(!pressonly)pressonly=true;
        else prs.of(this.point[n].name).pressed=false;}}}}
class setpoint{
  constructor(name,x,y,s,c){
    this.name=name;
    this.x=x;
    this.y=y;
    this.px=x;
    this.py=y;
    this.s=s;
    this.c=c;
    this.nc=color(red(c)/2,green(c)/2,blue(c)/2);
    this.pressed=false;
    this.delayPressed=false;}
  draw(){
    noStroke();
    let x=this.x;
    let y=this.y;
    let s=this.s;
    let px=this.px;
    let py=this.py;
    let c=this.c;
    let nc=this.nc;
    let p=prs.of(this.name).in(sq(mouseX-x)+sq(mouseY-y)<sq(s/2.0));
    if(p==0)fill(red(c),green(c),blue(c),128);
    if(p==1)fill(c);
    if(p==2){
      fill(nc);
      px=x-mouseX;
      py=y-mouseY;}
    if(p==3){
      fill(nc);
      x=mouseX+px;
      y=mouseY+py;}
    circle(x,y,s);
    this.x=x;
    this.y=y;
    this.px=px;
    this.py=py;}}
let pointer=new pointers();
