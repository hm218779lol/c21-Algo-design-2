var edges 
function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200,200,50,50);
  sprite1.shapeColor="green";
  sprite2.shapeColor="green";
  sprite1.debug="true";
  sprite2.debug="true";
  sprite1.velocityX=30;
  sprite1.velcoityY=20;
  sprite2.velocityX=30;
  sprite2.velocityY=20;
  edges= createEdgeSprites();
}

function draw() {
  background(255,255,255);
  sprite1.bounceOff(edges);
  sprite2.bounceOff(edges);
  bounceOff(sprite1,sprite2);
  if(isTouching(sprite1,sprite2)){
    sprite1.shapeColor="red";
    sprite2.shapeColor="red";
     } 
     else{
     sprite1.shapeColor="green";
     sprite2.shapeColor="green";
     }
  drawSprites();
}
