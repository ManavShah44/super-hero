const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, superhero1;
var bgImg,platform;
var bird, slingShot,score=0, gameState="onSling";

function preload() {
    bgImg=loadImage("GamingBackground.png")
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    superhero1=new Superhero(200,200,100,50)
    slingShot=new SlingShot(superhero1.body,{x:200,y:80})
  }



function draw() {
  background(bgImg);
  Engine.update(engine)
  ground.display()
  superhero1.display()
  slingShot.display()

}

