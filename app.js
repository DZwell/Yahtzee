var myArr = [];

var Dice = function(roll) {
  this.roll = (Math.floor(Math.random() * 6) + 1);
}

for (var i = 0; i < 5; i++) {
  myArr[i] = new Dice(Dice.roll);
}

// add total
var total = 0;
for (var i = 0; i < myArr.length; i++ ) {
  total += myArr[i].roll;
};

myArr.push(total);
