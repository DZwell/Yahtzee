var myArr = [];

var Dice = function(roll) {
  this.roll = (Math.floor(Math.random() * 6) + 1);
}

for (var i = 0; i < 5; i++) {
  myArr[i] = new Dice(Dice.roll);
}

// local storage

sessionStorage['myArr'] = JSON.stringify(myArr);
var storedArry = JSON.parse(sessionStorage['myArr']);
console.log(sessionStorage);

// reload button
// adds new empty array and creates 5 new dice

var newRoll = function() {
  myArr = [];

  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.roll);
  };
};

document.getElementById("rel").addEventListener("click", newRoll);

// issues
// rolls do not change on screen but do in console
