<<<<<<< HEAD
var tile;
var place = false;

var grid =  [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 4);
  // tile1 = new Tile(width/2 - 200, height/2 - 300, 100, "grey", 2);
  createTiles();
=======
var tiles
var int;
var num;

function setup() {
  createCanvas(500, 500);
  background(200);
  // var int = randomNumber();
  tiles = new tile();
  // tiles.draw(int);
>>>>>>> c657a1206cea8b7cd534775c232c825f953a839f
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

function createTiles() {
  tile1 = new Tile(width/2 - 200, height/2 - 300, 100, "grey", 2)
}

function drawTiles() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid[i][j] == 0) {
        place = true;
      }
    }
  }
}
