var papa, shaurya;
var hbpopUp, papaPic, sonPic;
var ob1,ob2,ob3;
var ground;

function preload() {
  hbImg = loadImage("happy bday.jpg")
  papaImg = loadImage("dad img.jpg")
  sonImg = loadImage("son img.png")
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(width/2,height-50, windowWidth,100);
  papa = createSprite(width/12, height-130, 50, 50);
  //papa.addImage(papaImg);
  shaurya = createSprite(width - 200, height-130, 50, 50);
  //shaurya.addImage(sonImg);
  ob1 = createSprite(width/3-50, height-125, 25, 50);
  ob2 = createSprite(width/2, height-125, 25, 50)
  ob3 = createSprite(width/2+300, height-125, 25, 50)
  hbpopUp = createSprite(width/2, height/2);
  hbpopUp.addImage(hbImg);
  hbpopUp.visible = false;

}

function draw() {
  background(0,0,0);  

  if(keyDown("RIGHT_ARROW")){
    papa.velocityX = 4;
  }

  if(keyDown("LEFT_ARROW")){
    papa.velocityX = -4;
  }

  if(keyDown("UP_ARROW")) {
    papa.velocityY = -4;
  }

  if(papa.isTouching(shaurya)){
   hbpopUp.visible = true; 
  }

  drawSprites();
}