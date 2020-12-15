
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balls;
var l1,l2,l3;
var ground;
var paper;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
    ground = new Ground(width/2, 670, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

    l1=new Dustbin(650,650,200,20);
    l2=new Dustbin(550,610,20,100);
    l3=new Dustbin(750,610,20,100);
    
    paper=new Paper(50,650,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 l1.display();
 l2.display();
 l3.display();

 paper.display();
 ground.display();

 
 //drawSprites();

    
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-20})
  }

}


