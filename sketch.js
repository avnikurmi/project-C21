const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;




function setup() {
	createCanvas(800,700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(width/2,690,width,20);
    left_side=new Ground(500,655,5,50);
    right_side=new Ground(570,655,5,50);
   
    var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
    }
  
    ball=Matter.Bodies.circle(40,680,25,ball_options);
    World.add(world,ball);
 
   
  rectMode(CENTER);
  ellipse(RADIUS);
  Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,25)
  ground.show();
  left_side.show();
  right_side.show();
 
  drawSprites();
}
 
function keyPressed(){
if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}


}
