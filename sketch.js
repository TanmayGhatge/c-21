var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(400, 100, 50, 80);
  obj1.shapeColor = "blue";
  obj1.debug = true;
  obj2 = createSprite(200,100,80,30);
  obj2.shapeColor = "blue";
  obj2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(obj2,movingRect)){
  movingRect.shapeColor = "red";
  obj2.shapeColor = "red";
  }
  else {
  movingRect.shapeColor = "green";
  obj2.shapeColor = "green";
  }
  drawSprites();
}

