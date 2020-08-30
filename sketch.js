const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, ground2, ground3;
var box1, box2, box3, box4, box5, box6;
var slingshot;
var hexagon;
var engine, world;
var backgroundImg
var score = 0;

function setup() {
	createCanvas(1600, 800);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(800,790,1600,15);
  ground2 = new Ground(900,400,200,10);
  ground3 = new Ground(1200,300,200,10);
  box1 = new Box(860,370,70,70);
  box2 = new Box(930,370,70,70);
  box3 = new Box(895,300,70,70);
  box4 = new Box(1160,270,70,70);
  box5 = new Box(1230,270,70,70);
  box6 = new Box(1195,200,70,70);
  hexagon = new Hexa(200,650,40,40);
  slingshot = new Sling(this.polygon,{x:200, y:650});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  hexagon.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}