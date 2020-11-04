
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobj;
var ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj = new paper(100,250,30);
	ground = new Ground(400,280,900,20);
	dustbin1 = new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    
	paperobj.display();
	ground.display();
	dustbin1.display();
 
}



