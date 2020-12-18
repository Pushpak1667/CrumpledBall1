
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,500,52);

ground = new Ground(windowWidth/2,windowHeight - 40,width,25);

box1 = new Box(windowWidth - 90,windowHeight - 105,25,100);
box2 = new Box(windowWidth - 412,windowHeight - 103,25,100);
box3 = new Box(windowWidth - 250,windowHeight - 65,300,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();

box1.display();
box2.display();
box3.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600 ,y:-600})
	}
}