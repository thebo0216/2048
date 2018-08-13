function tile() {

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var numbers = [1];
  var place = true;
  // var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // var int = random(ints);
  var two = 2;
  var four = 4;
  var t1 = true;
  var t2 = true;
  var t3 = true;
  var t4 = true;
  var t5 = true;
  var t6 = true;
  var t7 = true;
  var t8 = true;
  var t9 = true;

<<<<<<< HEAD
  this.drawBackground = function() {
    fill(230);
    rect(width/2 - 200, height/2 - 300, 400, 400);
=======
	this.draw = function(int) {
    // var int = random(ints);
		var number = random(numbers);
    if (number == 1 && t1 == true && place == true) {
  		this.tile1(int);
    }
    else if (number == 2 && t2 == true && place == true) {
  		this.tile2(int);
    }
    else if (number == 3 && t3 == true && place == true) {
  		this.tile3(int);
    }
    else if (number == 4 && t4 == true && place == true) {
  		this.tile4(int);
    }
    else if (number == 5 && t5 == true && place == true) {
  		this.tile5(int);
    }
    else if (number == 6 && t6 == true && place == true) {
  		this.tile6(int);
    }
    else if (number == 7 && t7 == true && place == true) {
  		this.tile7(int);
    }
    else if (number == 8 && t8 == true && place == true) {
  		this.tile8(int);
    }
    else if (number == 9 && t9 == true && place == true) {
  		this.tile9(int);
    }
>>>>>>> c657a1206cea8b7cd534775c232c825f953a839f
  }

  this.tile1 = function(num) {
  	fill('orange');
    noStroke();
    rect(20, 20, 140, 140);
    textSize(32);
    fill(0);
<<<<<<< HEAD
    text(number, this.x + 45, this.y + 55);
=======
    text(num, 80, 100);
    t1 = false;
    place = false;
>>>>>>> c657a1206cea8b7cd534775c232c825f953a839f
  }

  this.tile2 = function(num) {
  	fill('orange');
    noStroke();
    rect(180, 20, 140, 140);
    textSize(32);
    fill(0);
    text(num, 240, 100)
    textSize(32);
    fill(0);
    text(num, 240, 100);
    t2 = false;
    place = false;
  }

  this.tile3 = function(num) {
  	fill('orange');
    noStroke();
    rect(340, 20, 140, 140);
    text(num, 400, 100)
    textSize(32);
    fill(0);
    text(num, 400, 100);
    t3 = false;
    place = false;
  }

  this.tile4 = function(num) {
  	fill('orange');
    noStroke();
    rect(20, 180, 140, 140);
    text(num, 80, 260)
    textSize(32);
    fill(0);
    text(num, 80, 260);
    t4 = false;
    place = false;
  }

  this.tile5 = function(num) {
  	fill('orange');
    noStroke();
    rect(180, 180, 140, 140);
    text(num, 240, 260)
    textSize(32);
    fill(0);
    text(num, 240, 260);
    t5 = false;
    place = false;
  }

    this.tile6 = function(num) {
  	fill('orange');
    noStroke();
    rect(340, 180, 140, 140);
    text(num, 400, 260)
    textSize(32);
    fill(0);
    text(num, 400, 260);
    t6 = false;
    place = false;
  }

  this.tile7 = function(num) {
  	fill('orange');
    noStroke();
    rect(20, 340, 140, 140);
    text(num, 80, 420)
    textSize(32);
    fill(0);
    text(num, 80, 420);
    t7 = false;
    place = false;
  }

  this.tile8 = function(num) {
  	fill('orange');
    noStroke();
    rect(180, 340, 140, 140);
    text(num, 240, 420)
    textSize(32);
    fill(0);
    text(num, 240, 420);
    t8 = false;
    place = false;
  }

  this.tile9 = function(num) {
    fill('orange');
    noStroke();
    rect(340, 340, 140, 140);
    text(num,400, 420)
    textSize(32);
    fill(0);
    text(num, 400, 420);
    t9 = false;
    place = false;
  }

  this.moveRight = function(num) {
    if (t1 == false && keyCode == RIGHT_ARROW) {
      background(200);
      fill('orange');
      noStroke();
      rect(180, 20, 140, 140);
      textSize(32);
      fill(0);
      text(num, 240, 100);
      t1 = true;
      t2 = false;
      place = true;
    }
    if (t2 == false && keyCode == RIGHT_ARROW) {
      background(200);
      fill('orange');
      noStroke();
      rect(340, 20, 140, 140);
      text(num, 400, 100)
      textSize(32);
      fill(0);
      text(num, 400, 100);
    }
  }

}
