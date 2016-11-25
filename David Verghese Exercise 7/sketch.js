var count;
var trapx;
var trapy;

var xplaces = [];
var yplaces = [];

function preload() {
  sea = loadImage("Dark sea.jpg");
  shark = loadImage("Shark.jpg");
  sharkherd = loadImage("sharkherd.jpg");
  fish = loadImage("fish.png");
  contrarian = loadImage("Contrarian.png");
}

function setup() {
  count = 0;
  createCanvas(600, 600);
  xplaces[0] = 0;
  xplaces[1] = 200;
  xplaces[2] = 400;

  yplaces[0] = 0;
  yplaces[1] = 200;
  yplaces[2] = 400;
}

function draw() {
  image(sea, 0, 0, width, height);
  if (count > 100) {
    image(shark, 0, 0, 2 + count, 2 + count);
  }
  console.log(count);

  image(fish, xplaces[0] + count, 10, 50, 50);
  image(fish, xplaces[1] + count, 10, 50, 50);
  image(fish, xplaces[2] + count, 10, 50, 50);

  image(fish, xplaces[0] + count, 10 + yplaces[1], 50, 50);
  image(fish, xplaces[1] + count, 10 + yplaces[1], 50, 50);
  image(fish, xplaces[2] + count, 10 + yplaces[1], 50, 50);

  image(fish, xplaces[0] + count, 10 + yplaces[2], 50, 50);
  image(fish, xplaces[1] + count, 10 + yplaces[2], 50, 50);
  image(fish, xplaces[2] + count, 10 + yplaces[2], 50, 50);
  if ((count > 0) && (count < 150)) {
    image(contrarian, mouseX, mouseY, 50, 50);
    triangle(mouseX - 100, mouseY + 10, mouseX - 70, mouseY + 10, mouseX, mouseY + 50);
    rect(mouseX - 150, mouseY - 50, 100, 80);
    text("Why are you all swimming that way? #Conformists", mouseX - 150, mouseY - 50, 100, 150);
  }

  if ((count > 150) && (count < 450)) {
    trapx = map(mouseX, 0, width, count, width + count);
    trapy = map(mouseY, 0, height, count, height + count);
    image(contrarian, trapx, trapy, 50, 50);
    triangle(trapx - 100, trapy + 10, trapx - 70, trapy + 10, trapx, trapy + 50);
    rect(trapx - 150, trapy - 50, 100, 80);
    textSize(20);
    text("Oh no!", trapx - 150, trapy - 50, 100, 150);
  }

  if (count > 450) {
    trapx = map(mouseX, 0, width, count, width + count);
    trapy = map(mouseY, 0, height, count, height + count);
    image(contrarian, trapx, trapy, 50, 50);
    triangle(trapx - 100, trapy + 10, trapx - 70, trapy + 10, trapx, trapy + 50);
    rect(trapx - 150, trapy - 50, 100, 80);
    textSize(20);
    text("Oh no!", trapx - 150, trapy - 50, 100, 150);
  }

  if (count > 800) {
    triangle(100, 150, 200, 150, count / 3 + 30, count / 3 + 30);
    rect(100, 100, 100, 80);
    textSize(20);
    text("YUM!!!!", 100, 100, 300, 350);
  }

  count += 2;
}