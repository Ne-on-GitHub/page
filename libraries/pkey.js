/*
  使用例

  if(ky.j)square(10,10,10);
  if(ky.k)square(20,10,10);
  if(ky.l)square(30,10,10);
  if(ky.semicolon)square(40,10,10);
  if(ky.colon)square(50,10,10);
  if(ky.closesquare)square(60,10,10);
*/
function keyPressed(){
  ky.keyPressed();
}
function keyReleased(){
  ky.keyReleased();
}
class PKey{
  constructor(){
    this.zero;
    this.one;
    this.two;
    this.three;
    this.four;
    this.five;
    this.six;
    this.seven;
    this.eight;
    this.nine;
    this.A;
    this.B;
    this.C;
    this.D;
    this.E;
    this.F;
    this.G;
    this.H;
    this.I;
    this.J;
    this.K;
    this.L;
    this.M;
    this.N;
    this.O;
    this.P;
    this.Q;
    this.R;
    this.S;
    this.T;
    this.U;
    this.V;
    this.W;
    this.X;
    this.Y;
    this.Z;
    this.a;
    this.b;
    this.c;
    this.d;
    this.e;
    this.f;
    this.g;
    this.h;
    this.i;
    this.j;
    this.k;
    this.l;
    this.m;
    this.n;
    this.o;
    this.p;
    this.q;
    this.r;
    this.s;
    this.t;
    this.u;
    this.v;
    this.w;
    this.x;
    this.y;
    this.z;
    this.minus;
    this.caret;
    this.yen;
    this.atsign;
    this.opensquare;
    this.semicolon;
    this.colon;
    this.closesquare;
    this.comma;
    this.period;
    this.slash;
    this.underbar;
    this.exclamation;
    this.doublequotation;
    this.hashtag;
    this.$;
    this.percent;
    this.ampersand;
    this.singlequotation;
    this.openparenthese;
    this.closeparenthese;
    this.equal;
    this.tilde;
    this.bar;
    this.accent;
    this.openbrace;
    this.plus;
    this.asterisk;
    this.closebrace;
    this.less;
    this.greater;
    this.question;
    this.up;
    this.down;
    this.left;
    this.right;
    this.alt;
    this.ctrl;
    this.shift;
    this.backspace;
    this.tab;
    this.enter;
    this.rtn;
    this.esc;
    this.delete;
    this.txt;
  }
  keyPressed(){
    if(key=='0')this.zero=true;
    if(key=='1')this.one=true;
    if(key=='2')this.two=true;
    if(key=='3')this.three=true;
    if(key=='4')this.four=true;
    if(key=='5')this.five=true;
    if(key=='6')this.six=true;
    if(key=='7')this.seven=true;
    if(key=='8')this.eight=true;
    if(key=='9')this.nine=true;
    if(key=='A')this.A=true;
    if(key=='B')this.B=true;
    if(key=='C')this.C=true;
    if(key=='D')this.D=true;
    if(key=='E')this.E=true;
    if(key=='F')this.F=true;
    if(key=='G')this.G=true;
    if(key=='H')this.H=true;
    if(key=='I')this.I=true;
    if(key=='J')this.J=true;
    if(key=='K')this.K=true;
    if(key=='L')this.L=true;
    if(key=='M')this.M=true;
    if(key=='N')this.N=true;
    if(key=='O')this.O=true;
    if(key=='P')this.P=true;
    if(key=='Q')this.Q=true;
    if(key=='R')this.R=true;
    if(key=='S')this.S=true;
    if(key=='T')this.T=true;
    if(key=='U')this.U=true;
    if(key=='V')this.V=true;
    if(key=='W')this.W=true;
    if(key=='X')this.X=true;
    if(key=='Y')this.Y=true;
    if(key=='Z')this.Z=true;
    if(key=='a')this.a=true;
    if(key=='b')this.b=true;
    if(key=='c')this.c=true;
    if(key=='d')this.d=true;
    if(key=='e')this.e=true;
    if(key=='f')this.f=true;
    if(key=='g')this.g=true;
    if(key=='h')this.h=true;
    if(key=='i')this.i=true;
    if(key=='j')this.j=true;
    if(key=='k')this.k=true;
    if(key=='l')this.l=true;
    if(key=='m')this.m=true;
    if(key=='n')this.n=true;
    if(key=='o')this.o=true;
    if(key=='p')this.p=true;
    if(key=='q')this.q=true;
    if(key=='r')this.r=true;
    if(key=='s')this.s=true;
    if(key=='t')this.t=true;
    if(key=='u')this.u=true;
    if(key=='v')this.v=true;
    if(key=='w')this.w=true;
    if(key=='x')this.x=true;
    if(key=='y')this.y=true;
    if(key=='z')this.z=true;
    if(key=='-')this.minus=true;
    if(key=='^')this.caret=true;
    if(key=='¥')this.yen=true;
    if(key=='@')this.atsign=true;
    if(key=='[')this.opensquare=true;
    if(key==';')this.semicolon=true;
    if(key==':')this.colon=true;
    if(key==']')this.closesquare=true;
    if(key==',')this.comma=true;
    if(key=='.')this.period=true;
    if(key=='/')this.slash=true;
    if(key=='_')this.underbar=true;
    if(key=='!')this.exclamation=true;
    if(key=='"')this.doublequotation=true;
    if(key=='#')this.hashtag=true;
    if(key=='$')this.$=true;
    if(key=='%')this.percent=true;
    if(key=='&')this.ampersand=true;
    if(key=='\'')this.doublequotation=true;
    if(key=='(')this.openparenthese=true;
    if(key==')this.')this.closeparenthese=true;
    if(key=='=')this.equal=true;
    if(key=='~')this.tilde=true;
    if(key=='|')this.bar=true;
    if(key=='`')this.accent=true;
    if(key=='{')this.openbrace=true;
    if(key=='+')this.plus=true;
    if(key=='*')this.asterisk=true;
    if(key=='}')this.closebrace=true;
    if(key=='<')this.less=true;
    if(key=='>')this.greater=true;
    if(key=='?')this.question=true;
    if(keyCode==UP)this.up=true;
    if(keyCode==DOWN)this.down=true;
    if(keyCode==LEFT)this.left=true;
    if(keyCode==RIGHT)this.right=true;
    if(keyCode==ALT)this.alt=true;
    if(keyCode==CONTROL)this.ctrl=true;
    if(keyCode==SHIFT)this.shift=true;
    if(key==BACKSPACE)this.backspace=true;
    if(key==TAB)this.tab=true;
    if(key==ENTER)this.enter=true;
    if(key==RETURN)this.rtn=true;
    if(key==ESC)this.esc=true;
    if(key==DELETE)this.delete=true;
    this.txt=key;
    key=' ';
  }
  keyReleased(){
    if(key=='0'){
      this.zero=false;
      this.zero=false;
    }
    if(key=='1'){
      this.one=false;
      this.exclamation=false;
    }
    if(key=='2'){
      this.two=false;
      this.doublequotation=false;
    }
    if(key=='3'){
      this.three=false;
      this.hashtag=false;
    }
    if(key=='4'){
      this.four=false;
      this.$=false;
    }
    if(key=='5'){
      this.five=false;
      this.percent=false;
    }
    if(key=='6'){
      this.six=false;
      this.ampersand=false;
    }
    if(key=='7'){
      this.seven=false;
      this.singlequotation=false;
    }
    if(key=='8'){
      this.eight=false;
      this.openparenthese=false;
    }
    if(key=='9'){
      this.nine=false;
      this.closeparenthese=false;
    }
    if(key=='A'){
      this.A=false;
      this.a=false;
    }
    if(key=='B'){
      this.B=false;
      this.b=false;
    }
    if(key=='C'){
      this.C=false;
      this.c=false;
    }
    if(key=='D'){
      this.D=false;
      this.d=false;
    }
    if(key=='E'){
      this.E=false;
      this.e=false;
    }
    if(key=='F'){
      this.F=false;
      this.f=false;
    }
    if(key=='G'){
      this.G=false;
      this.g=false;
    }
    if(key=='H'){
      this.H=false;
      this.h=false;
    }
    if(key=='I'){
      this.I=false;
      this.i=false;
    }
    if(key=='J'){
      this.J=false;
      this.j=false;
    }
    if(key=='K'){
      this.K=false;
      this.k=false;
    }
    if(key=='L'){
      this.L=false;
      this.l=false;
    }
    if(key=='M'){
      this.M=false;
      this.m=false;
    }
    if(key=='N'){
      this.N=false;
      this.n=false;
    }
    if(key=='O'){
      this.O=false;
      this.o=false;
    }
    if(key=='P'){
      this.P=false;
      this.p=false;
    }
    if(key=='Q'){
      this.Q=false;
      this.q=false;
    }
    if(key=='R'){
      this.R=false;
      this.r=false;
    }
    if(key=='S'){
      this.S=false;
      this.s=false;
    }
    if(key=='T'){
      this.T=false;
      this.t=false;
    }
    if(key=='U'){
      this.U=false;
      this.u=false;
    }
    if(key=='V'){
      this.V=false;
      this.v=false;
    }
    if(key=='W'){
      this.W=false;
      this.w=false;
    }
    if(key=='X'){
      this.X=false;
      this.x=false;
    }
    if(key=='Y'){
      this.Y=false;
      this.y=false;
    }
    if(key=='Z'){
      this.Z=false;
      this.z=false;
    }
    if(key=='a'){
      this.a=false;
      this.A=false;
    }
    if(key=='b'){
      this.b=false;
      this.B=false;
    }
    if(key=='c'){
      this.c=false;
      this.C=false;
    }
    if(key=='d'){
      this.d=false;
      this.D=false;
    }
    if(key=='e'){
      this.e=false;
      this.E=false;
    }
    if(key=='f'){
      this.f=false;
      this.F=false;
    }
    if(key=='g'){
      this.g=false;
      this.G=false;
    }
    if(key=='h'){
      this.h=false;
      this.H=false;
    }
    if(key=='i'){
      this.i=false;
      this.I=false;
    }
    if(key=='j'){
      this.j=false;
      this.J=false;
    }
    if(key=='k'){
      this.k=false;
      this.K=false;
    }
    if(key=='l'){
      this.l=false;
      this.L=false;
    }
    if(key=='m'){
      this.m=false;
      this.M=false;
    }
    if(key=='n'){
      this.n=false;
      this.N=false;
    }
    if(key=='o'){
      this.o=false;
      this.O=false;
    }
    if(key=='p'){
      this.p=false;
      this.P=false;
    }
    if(key=='q'){
      this.q=false;
      this.Q=false;
    }
    if(key=='r'){
      this.r=false;
      this.R=false;
    }
    if(key=='s'){
      this.s=false;
      this.S=false;
    }
    if(key=='t'){
      this.t=false;
      this.T=false;
    }
    if(key=='u'){
      this.u=false;
      this.U=false;
    }
    if(key=='v'){
      this.v=false;
      this.V=false;
    }
    if(key=='w'){
      this.w=false;
      this.W=false;
    }
    if(key=='x'){
      this.x=false;
      this.X=false;
    }
    if(key=='y'){
      this.y=false;
      this.Y=false;
    }
    if(key=='z'){
      this.z=false;
      this.Z=false;
    }
    if(key=='-'){
      this.minus=false;
      this.equal=false;
    }
    if(key=='^'){
      this.caret=false;
      this.tilde=false;
    }
    if(key=='¥'){
      this.yen=false;
      this.bar=false;
    }
    if(key=='@'){
      this.atsign=false;
      this.accent=false;
    }
    if(key=='['){
      this.opensquare=false;
      this.openbrace=false;
    }
    if(key==';'){
      this.semicolon=false;
      this.plus=false;
    }
    if(key==':'){
      this.colon=false;
      this.asterisk=false;
    }
    if(key==']'){
      this.closesquare=false;
      this.closebrace=false;
    }
    if(key==','){
      this.comma=false;
      this.less=false;
    }
    if(key=='.'){
      this.period=false;
      this.greater=false;
    }
    if(key=='/'){
      this.slash=false;
      this.question=false;
    }
    if(key=='_'){
      this.underbar=false;
      this.underbar=false;
    }
    if(key=='!'){
      this.exclamation=false;
      this.one=false;
    }
    if(key=='"'){
      this.doublequotation=false;
      this.two=false;
    }
    if(key=='#'){
      this.hashtag=false;
      this.three=false;
    }
    if(key=='$'){
      this.$=false;
      this.four=false;
    }
    if(key=='%'){
      this.percent=false;
      this.five=false;
    }
    if(key=='&'){
      this.ampersand=false;
      this.six=false;
    }
    if(key=='\''){
      this.doublequotation=false;
      this.two=false;
    }
    if(key=='('){
      this.openparenthese=false;
      this.eight=false;
    }
    if(key==')'){
      this.closeparenthese=false;
      this.nine=false;
    }
    if(key=='='){
      this.equal=false;
      this.minus=false;
    }
    if(key=='~'){
      this.tilde=false;
      this.caret=false;
    }
    if(key=='|'){
      this.bar=false;
      this.yen=false;
    }
    if(key=='`'){
      this.accent=false;
      this.atsign=false;
    }
    if(key=='{'){
      this.openbrace=false;
      this.opensquare=false;
    }
    if(key=='+'){
      this.plus=false;
      this.semicolon=false;
    }
    if(key=='*'){
      this.asterisk=false;
      this.colon=false;
    }
    if(key=='}'){
      this.closebrace=false;
      this.closesquare=false;
    }
    if(key=='<'){
      this.less=false;
      this.comma=false;
    }
    if(key=='>'){
      this.greater=false;
      this.period=false;
    }
    if(key=='?'){
      this.question=false;
      this.slash=false;
    }
    if(keyCode==UP)this.up=false;
    if(keyCode==DOWN)this.down=false;
    if(keyCode==LEFT)this.left=false;
    if(keyCode==RIGHT)this.right=false;
    if(keyCode==ALT)this.alt=false;
    if(keyCode==CONTROL)this.ctrl=false;
    if(keyCode==SHIFT)this.shift=false;
    if(key==BACKSPACE)this.backspace=false;
    if(key==TAB)this.tab=false;
    if(key==ENTER){
      this.enter=false;
      this.rtn=false;
    }
    if(key==RETURN){
      this.rtn=false;
      this.enter=false;
    }
    if(key==ESC)this.esc=false;
    if(key==DELETE)this.delete=false;
    key=' ';
  }
}
ky=new PKey();
