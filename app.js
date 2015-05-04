var myArr = [];

var Dice = function(roll) {
  this.roll = (Math.floor(Math.random() * 6) + 1);
}

for (var i = 0; i < 5; i++) {
  myArr[i] = new Dice(Dice.roll);
}

// save to session storage

sessionStorage['myArr'] = JSON.stringify(myArr);
var storedArray = JSON.parse(sessionStorage['myArr']);
console.log(storedArray[0].roll);
console.log(storedArray[1].roll);
console.log(storedArray[2].roll);
console.log(storedArray[3].roll);
console.log(storedArray[4].roll);



//retrive from session storage




// reload button
// adds new empty array and creates 5 new dice

var newRoll = function() {
  $('p').empty();

  myArr = [];

  for (var i = 0; i < 5; i++) {
    myArr[i] = new Dice(Dice.roll);
  };
};

document.getElementById("rel").addEventListener("click", newRoll);

// save buttons
