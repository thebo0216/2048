var tiles

function setup() {
  createCanvas(500, 500);
  background(200);
  tiles = new tile();
}

function draw() {
  // background(200);
  tiles.draw();
}
