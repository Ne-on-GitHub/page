class pressee{
  constructor(){
    this.pressed=false
    this.delayPressed=false;}
  in(mouseIsInArea){
    let pressed=this.pressed;
    let delayPressed=this.delayPressed;
    let rn=0;
    if(mouseIsPressed&&!delayPressed){
      if(mouseIsInArea){
        pressed=true;
        rn=2;}
      delayPressed=true;}
    if(!mouseIsPressed&&delayPressed){
      if(pressed&&mouseIsInArea)rn=4;
      pressed=false;
      delayPressed=false;}
    if(rn==0){
      if(pressed)rn=3;
      else if(mouseIsInArea)rn=1;}
    this.pressed=pressed;
    this.delayPressed=delayPressed;
    return rn;}}
class pressees{
  constructor(){
    this.presseer=[];
    this.dict=[];}
  of(s){
    for(let n=0;n<this.dict.length;n++)if(s==this.dict[n])return this.presseer[n];
    this.presseer.push(new pressee());
    this.dict.push(s);
    return this.presseer[this.presseer.length-1]}}
let prs=new pressees();
