
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand1,stand2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
,block17,block18,block19,block20,block21,block22,block23,block24,polygon,slingShot,polyimage;
function preload(){
polyImage = loadImage("polygon.png")
}
function setup(){
createCanvas(700,700);

engine = Engine.create();
world = engine.world;

stand1 = new Ground(300,600,210,20)
stand2 = new Ground(600,300,210,20)
//first stand
//first line
fill("lightBlue");
block1 = new Box(360,560,30,40)
block2 = new Box(330,560,30,40)
block3 = new Box(300,560,30,40)
block4 = new Box(270,560,30,40)
block5 = new Box(240,560,30,40)
//second line
block6 = new Box(250,520,30,40)
block7 = new Box(280,520,30,40)
block8 = new Box(310,520,30,40)
block9 = new Box(340,520,30,40)
//third line
block10 = new Box(265,480,30,40)
block11 = new Box(295,480,30,40)
block12 = new Box(325,480,30,40)
//fourth line
block13 = new Box(280,440,30,40)
block14 = new Box(310,440,30,40)
//fifth line
block15 = new Box(295,400,30,40)
//second stand 
//first line
block16 = new Box(535,175,30,40)
block17 = new Box(565,175,30,40)
block18 = new Box(595,175,30,40)
block19 = new Box(625,175,30,40)
block20 = new Box(655,175,30,40)
//second line
block21 = new Box(565,135,30,40)
block22 = new Box(595,135,30,40)
block23 = new Box(625,135,30,40)
//third line
block24 = new Box(595,95,30,40)


polygon = Bodies.circle(50,200,20)
   World.add(world, polygon);
   slingShot = new SlingShot(this.polygon,{x:100,y:200});




Engine.run(engine);
}
function draw(){
 rectMode(CENTER);
background("lightblue")
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
slingShot.display();
imageMode(CENTER)
image(polyImage,polygon.position.x,polygon.position.y,40,40)

}
function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   slingShot.fly();
 }
 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(this.polygon)
   }
 }