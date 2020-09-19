var ground, player;
var w = 800;
var h = 400;
var roomw = w;
var nextRoomReached = 0;
var image1;
var playerImage;
var drawingRoom, bedroom, hall;
var bg;
var gameState = "start";
var choice = 0;
var seconds;
var optionA, optionB;
var flag = 0;

function preload() {
  image1 = loadImage("temporary.png");
  playerImage = loadAnimation("images/1.png", "images/2.png", "images/3.png");
  drawingRoom = loadImage("images/BACK1.jpg");
  bedroom = loadImage("images/back3.jpg");
  hall = loadImage("images/BACK2.jpg");
}

function setup() {
  createCanvas(w, h);

  bg = createSprite(w / 2, h / 2, 20, 20);
  bg.addImage("bedroom", bedroom);
  bg.addImage("drawingroom", drawingRoom);
  bg.addImage("Hall", hall);

  // ground= createSprite(w/2, 0,w, h);
  //ground.addImage(image1);
  //ground.scale=4;

  player = createSprite(w / 2, h - 50, 20, 20);
  player.addAnimation("playersprite", playerImage);
  player.scale = 1;

  seconds = second();

  console.log(seconds);
}

function draw() {
  background(255);




  camera.position.x = player.x;
  if (keyDown(RIGHT_ARROW)) {
    //need to slow down player speed
    var currentPosition = player.x;

    while (player.x !== currentPosition + roomw) {
      player.x = player.x + 1;
    }
  }
  drawSprites();
  if (flag !== 0 && gameState === "start") {
    gameState = "play";
    console.log("hello");
  } else if (gameState !== "play") {
    textSize(15);
    fill("black");
    stroke("white")
    text("You wake up in a room which you do not recognise and you hear someone ", 200, 20);
    text("calling out your enemy's name,there are two doors A and B.  ", 200, 40);
    text("Now you have to decide which room you want to go to. ", 200, 60);
    optionA = createSprite(300, 200, 80, 50);
    optionB = createSprite(500, 200, 80, 50);
    text("Option A", 270, 200);
    text("Option B", 470, 200);
    if (mousePressedOver(optionA)) {
      flag = 1;
      bg.changeAnimation("drawingroom", drawingRoom);

    } else if (mousePressedOver(optionB)) {
      flag = 2;
      bg.changeAnimation("Hall", hall);
    }

  }

  if (flag === 1) {
    text("intro", 200, 50);
    if (mousePressedOver(next)) {
      text("intro", 200, 50);
      text("Option A", 270, 200);
      text("Option B", 470, 200);
      if (mousePressedOver(optionA)) {
        flag = 3;

      } else if (mousePressedOver(optionB)) {
        flag = 4;

      }
    }

    if (flag === 2) {
      text("intro", 200, 50);
      if (mousePressedOver(next)) {
        text("intro", 200, 80);
        text("Option A", 270, 200);
        text("Option B", 470, 200);
        if (mousePressedOver(optionA)) {
          flag = 5;

        } else if (mousePressedOver(optionB)) {
          flag = 6;

        }
      }
    }
  }
}