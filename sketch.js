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
}

function draw() {
  background(255);
  tile1.drawBackground();
  tile1.drawTile();
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
