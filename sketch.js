var tile;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 4);
  tile1 = new Tile(0, 0, 100, "grey", 2);
}

function draw() {
  background(255);
  tile1.drawBackground();
  tile1.drawTile();
}
