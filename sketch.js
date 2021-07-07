var iss,spacecraft,hasDocked=false
var issI,spacecraftI1,spacecraftI2,spacecraftI3,spacecraftI4,bgI
function preload() {
  issI=loadImage("Images/iss.png");
  bgI=loadImage("Images/spacebg.jpg");
  spacecraftI1=loadImage("Images/spacecraft1.png");
  spacecraftI2=loadImage("Images/spacecraft2.png");
  spacecraftI3=loadImage("Images/spacecraft3.png");
  spacecraftI4=loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,800);
 iss=createSprite(400, 200, 50, 50);
 iss.addImage(issI);
 spacecraft=createSprite(100, 500, 50, 50);
 spacecraft.addImage(spacecraftI1);
 spacecraft.scale=0.15
}

function draw() {
  background(bgI);  
  if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1)
  
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraftI3);
    spacecraft.x=spacecraft.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraftI4);
    spacecraft.x=spacecraft.x+5
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraftI2);
  }
  if(keyDown(UP_ARROW)){
  spacecraft.y=spacecraft.y-5
  }
}
if (spacecraft.x<=(iss.x+50)&&spacecraft.y<=(iss.y+85)) {
  hasDocked=true
  textSize(25)
  stroke("lightblue")
  strokeWeight(25)
  fill('White')
  text("DOCKING SUCESSFULL !!\nYOU ROCK",50,500)
}

drawSprites();
}
