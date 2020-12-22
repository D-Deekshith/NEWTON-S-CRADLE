
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
var chain,bobDiameter = 80,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(320-80,600,40);
	bob2 = new Bob(400-80,600,40);
	bob3 = new Bob(480-80,600,40);
	bob4 = new Bob(560-80,600,40);
	bob5 = new Bob(640-80,600,40);

	roof = new Roof(400,190,400,30);

	rope1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0)
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Chain(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-6000,y:-5500})
	}
}
