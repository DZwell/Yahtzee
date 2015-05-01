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


sessionStorage['myArr'] = JSON.stringify(myArr);
var storedArry = JSON.parse(sessionStorage['myArr']);
console.log(sessionStorage);

// reload button
// create new variable that is called on page load
// within varible, new object is created, pushed to array, etc

var newRoll = function() {
  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.roll);
  };
};

document.getElementById("rel").addEventListener("click", newRoll);
