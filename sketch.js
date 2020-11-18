var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
bullet=createSprite(50,200,50,50)
wall=createSprite(1200,200,thickness,height/2)
bullet.velocityX = speed;
bullet.shapeColor = "green"
wall.shapeColor = "80,80,80"
}
function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width/2+wall.width/2)){
    bullet.velocityX=0
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180){
      bullet.shapeColor = "orange"
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = "red"
    }
    if(deformation<100){
      bullet.shapeColor = "yellow"
    }
  }  
  drawSprites();
}