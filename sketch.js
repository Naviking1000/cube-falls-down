
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  
  var box_options = {
    restitution: 0.75,
    frictionAir:0.02
  }

   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  cueb = Bodies.rectangle(150,40,70,70,box_options);
  World.add(world,cueb);

  cueb1 = Bodies.rectangle(170,-100,70,70,box_options);
World.add(world,cueb1);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
    fill("red");
  rect(ground.position.x,ground.position.y,400,20);
 
fill("white");
  ellipse(ball.position.x,ball.position.y,20);

fill("purple");
rect(cueb.position.x,cueb.position.y,70,70);

rect(cueb1.position.x,cueb1.position.y,70,70);
  
}

