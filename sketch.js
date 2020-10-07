var fixedRect, movingRect;
var gameObject1 ,gameObject2 ,gameObject3 , gameObject4;

function setup() {
  
  fixedRect = createSprite(200, 250, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
//console.log(movingRect.x-fixedRect.x)

gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(220);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(movingRect,fixedRect)
  console.log(movingRect.x - fixedRect.x)
  if(isTouching(movingRect, gameObject2)) {

    movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  
  drawSprites();
}
