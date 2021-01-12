const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8;
var cup9, cup10, cup11, cup12, cup13, cup14, cup15, cup16;
var ground;
var backgroundImg;
var stand, stand2, stand2Img;
var slingshot, bgImg;
var score = 0;
var str = "Hello world!";
var res = str.slice(3);

function preload(){
    getBackgroundImage();
    stand2Img = loadImage("stand2.png")
	bgImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
    world = engine.world;

    stand = new Stand (690, 580, 380, 200)

    stand2 = createSprite(690, 580, 380, 200);
    stand2.addImage(stand2Img);
    stand2.scale = 0.25
	
    ground = new Ground (500, 685, 1000, 30)

	cup1 = new Cup (530,455,30,70);
	cup2 = new Cup (580,455,30,70);
    cup3 = new Cup (630,455,30,70);
    cup4 = new Cup (680,455,30,70);
    cup5 = new Cup (730,455,30,70);
	cup6 = new Cup (780,455,30,70);
	cup7 = new Cup (830,455,30,70);
	cup8 = new Cup (580,425,30,70);
    cup9 = new Cup (630,425,30,70);
    cup10 = new Cup (680,425,30,70);
    cup11 = new Cup (730,425,30,70);
    cup12 = new Cup (780,425,30,70);
    cup13 = new Cup (630,350,30,70);
    cup14 = new Cup (680,350,30,70);
    cup15 = new Cup (730,350,30,70);
    cup16 = new Cup (680,305,30,70);

    ball = new Ball (100, 350, 10, 10);
    
    slingshot = new Slingshot (ball.body, {x: 200, y:350})

	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
else{
	background(bgImg)}
  textSize(30);
  fill("white")
  text("Score " + score, width-300, 50);

  drawSprites();

  stand.display();

  ground.display();

  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();
  cup11.display();
  cup12.display();
  cup13.display();
  cup14.display();
  cup15.display();
  cup16.display();

  cup1.score();
  cup2.score();
  cup3.score();
  cup4.score();
  cup5.score();
  cup6.score();
  cup7.score();
  cup8.score();
  cup9.score();
  cup10.score();
  cup11.score();
  cup12.score();
  cup13.score();
  cup14.score();
  cup15.score();
  cup16.score();

  slingshot.display();

  ball.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(ball.body);
    }
}

async function getBackgroundImage(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responseJSON = await response.json();
   var hour = responseJSON.currentDateTime.slice(11, 13)
    console.log(hour);
    if(hour >= 06 && hour<=19){
        bg = "bgNight.png"
    }
    else{
        bg = "bg.png" 
    }
    backgroundImg = loadImage(bg)
}