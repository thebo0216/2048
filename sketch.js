var tiles
var int;
var num;

function setup() {
  createCanvas(500, 500);
  background(200);
  // var int = randomNumber();
  tiles = new tile();
  // tiles.draw(int);
}

function draw() {
  // background(200);
  num = randomNumber();
  tiles.draw(num);
  tiles.moveRight(num);
}


function randomNumber() {
  var int = random(ints);
  var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // var ints = [10];
  int = random(ints);
  if (int <= 9) {
    num = 2;
  }
  else {
    num = 4;
  }
  return num;
}
