// 'use strict';

// (function() {
  var myArr = [];

  var Dice = function(roll) {
    this.roll = (Math.floor(Math.random() * 6) + 1);
  }

  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.roll);
  }

// add total

  var total = myArr[0].roll + myArr[1].roll + myArr[2].roll + myArr[3].roll + myArr[4].roll;
// })();
