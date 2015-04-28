'use strict';

(function() {

  var myArr = [];

  var Dice = function(roll) {
    this.die = die;

    this.roll = (Math.floor(Math.random() * 6) + 1);
  }

  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.i, Dice.roll);
  }

  console.log(myArr);
  console.log(myArr[0]);






})();

