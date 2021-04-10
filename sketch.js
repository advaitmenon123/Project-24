
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     stone = new Stone(100,150,50,75);
     ground = new Ground(400,height,800,20)
     hammer = new Hammer (150,200,73,20)
     marble = new Marble (100,100,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display()
  ground.display();
  hammer.display();
  marble.display();
  
  drawSprites();
 
}



