'use strict';

(function() {
  var myArr = [];

  var Dice = function(roll) {
    this.roll = (Math.floor(Math.random() * 6) + 1);
  }

  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.roll);
  }

  console.log(myArr);

})();
