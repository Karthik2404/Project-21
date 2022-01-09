
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Line(400,450,900,10);
	right = new Line(650,395,10,110);
	left = new Line(500,395,10,100);

	var ball_options = {
	   restitution: 0.5
	}
	
	ball = Bodies.circle(150,0,20,ball_options);
    World.add(world,ball);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,30);

  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  if (keyDown("right_arrow")) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0});
 }

  if (keyDown("up_arrow")) {
  	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0.005});
  }

  drawSprites();
 
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0.1},{x:0,y:0});
}


