function Tile(x, y, length, color, number) {

  this.x = x;
  this.y = y;
  this.length = length;
  this.color = color;
  this.number = number;

  this.drawBackground = function() {
    fill(230);
    rect(width/2, height/2, 500, 500);
  }

  this.drawTile = function() {
    fill(color);
    rect(this.x, this.y, this.length, this.length);
    fill(0);
    text(number, this.x/2, this.y/2);
  }


}
