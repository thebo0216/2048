function tile() {

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var numbers = [1];
  var place = true;
  var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var int = random(ints);
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

	this.draw = function() {
    var int = random(ints);
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
  }

  this.tile1 = function(int) {
  	fill('orange');
    noStroke();
    rect(20, 20, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 80, 100);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 80, 100);
    }
    t1 = false;
    place = false;
  }

  this.tile2 = function(int) {
  	fill('orange');
    noStroke();
    rect(180, 20, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 240, 100)
    }
    else {
      textSize(32);
      fill(0);
      text(four, 240, 100);
    }
    t2 = false;
    place = false;
  }

  this.tile3 = function(int) {
  	fill('orange');
    noStroke();
    rect(340, 20, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 400, 100)
    }
    else {
      textSize(32);
      fill(0);
      text(four, 400, 100);
    }
    t3 = false;
    place = false;
  }

  this.tile4 = function(int) {
  	fill('orange');
    noStroke();
    rect(20, 180, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 80, 260);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 80, 260);
    }
    t4 = false;
    place = false;
  }

  this.tile5 = function(int) {
  	fill('orange');
    noStroke();
    rect(180, 180, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 240, 260);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 240, 260);
    }
    t5 = false;
    place = false;
  }

    this.tile6 = function(int) {
  	fill('orange');
    noStroke();
    rect(340, 180, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 400, 260);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 400, 260);
    }
    t6 = false;
    place = false;
  }

  this.tile7 = function(int) {
  	fill('orange');
    noStroke();
    rect(20, 340, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 80, 420);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 80, 420);
    }
    t7 = false;
    place = false;
  }

  this.tile8 = function(int) {
  	fill('orange');
    noStroke();
    rect(180, 340, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 240, 420);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 240, 420);
    }
    t8 = false;
    place = false;
  }

    this.tile9 = function(int) {
  	fill('orange');
    noStroke();
    rect(340, 340, 140, 140);
    if (int <= 9) {
      textSize(32);
      fill(0);
      text(two, 400, 420);
    }
    else {
      textSize(32);
      fill(0);
      text(four, 400, 420);
    }
    t9 = false;
    place = false;
  }

}
