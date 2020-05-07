var rainDropGroup;

function setup() {
  rainDropGroup = new Group();
}

function draw() {
  background("black");

  rainDrop_I();

  drawSprites();
}

function rainDrop_I() {
  
  if(frameCount % 2 === 0) { 
    var rainDrop1 = createSprite(200,0,4,30);
    rainDrop1.shapeColor = ("yellow");
    rainDrop1.velocityY = 12;
    rainDrop1.x = Math.round(random(1,400));
    rainDrop1.lifetime = 1000;
    rainDropGroup.add(rainDrop1);
  }
}