var ground,player;
var w=800;
var h=400;
var roomw=w;
var nextRoomReached=0;
var image1;
function preload(){
image1=loadImage("temporary.png");
}
function setup() {
  createCanvas(w,h);
 ground= createSprite(w/2, 0,w, h);
 ground.addImage(image1);
 ground.scale=4;
player=createSprite(w/2,h/2,20,20);

}

function draw() {
  background(0);  
  camera.position.x=player.x;
  if(keyDown(RIGHT_ARROW)){
    var currentPosition=player.x;

    while(player.x!==currentPosition+roomw){
    player.x=player.x+1;
    }
  }
  drawSprites();
}