const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg ,stoneImg,treeImg,mangoImg;
var mango1, mango2,mango3 , mango4 , mango5 ,mango6 ;
var tree,stone ,boy,rope;
function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;



	
  
	stone = new Stone(140,500);

	rope = new Rope(stone.body,{x:140, y:500});

	mango1 = new Mango(900,350);

	mango2 = new Mango(1150,300);

	mango3 = new Mango(1000,250);

	mango4 = new Mango(1075,150);

	mango5 = new Mango(920,200);

	mango6 = new Mango(1030,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  engine =Engine.update(engine);
  image(boy,100,400,200,400);
  image(tree,800,50,400,700);
 
  
  stone.display();
rope.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);
detectcollision(stone,mango6);
  drawSprites();
 
}



function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
 }
 function mouseReleased(){
	 rope.fly();
 }

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false);

}
}
