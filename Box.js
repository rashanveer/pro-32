class Box  {
  constructor(x, y, width, height){
var options =  {
  restitution:0.4,
  friction:1.0
}
this.visiblty = 255
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){
  if(this.body.speed<3){
var pos =this.body.position;
var angle = this.body.angle
push ();
rectMode(CENTER);
rotate(angle)
fill("brown");
rect(pos.x, pos.y, this.width, this.height);
pop ();
  }else{
    push();
    this.visiblty = this.visiblty -5
  }
}
    
  }

