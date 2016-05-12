var userName = prompt('Hi, thank you for visiting my page! What is your name?');
alert('Nice to meet you, ' + userName + '. I\'m going to ask you some questions about me.');
console.log('The user\'s name is ' + userName + ' and he is funky');
//
//   // The start of 5 questions
//
//   //if answer1 then yes
//   //if answer2 then no
//   //else prompt for answer
//
//   //response1
var response1 = prompt('Do I chew gum often?').toLowerCase();
var answer1 = 'yes';
var answer2 = 'no';
if (response1 === answer2 || response1 === answer2[0]) {
  alert('You are correct, ' + userName + ' ! I don\'t chew gum often!');
} else if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are incorrect, ' + userName + '. I don\'t chew gum often!');
}
    else {
  prompt('Please type-out yes or abbr y / n ');
}
console.log(userName + ' chose ' + response1 + ' as the 1st response .');

  //response2
var response2 = prompt('Do I like Indian Cuisine?').toLowerCase();
if (response2 === answer2 || response2 === answer2[0]) {
  alert('You are correct, ' + userName + ' ! I can\'t stand Indian food');
} else if (response2 === answer1 || response2 === answer1[0]) {
  alert('You are incorrect, ' + userName + '. I don\'t like Indian Cuisine!');
}
    else {
  prompt('Please type-out yes or abbr y / n ');
}
console.log(userName + ' chose ' + response2 + ' as the 2nd response.');

  //response3
var response3 = prompt('Have I ever been to Australia?').toLowerCase();
if (response3 === answer2 || response3 === answer2[0]) {
  alert('You are correct, ' + userName + ' ! I have never been to Australia');
} else if (response3 === answer1 || response3 === answer1[0]) {
  alert('You are incorrect, ' + userName + '. I would love to go to Australia');
}
    else {
  prompt('Please type-out yes or abbr y / n ');
}
console.log(userName + ' chose ' + response3 + ' as the 3rd response.');

  //response4
var response4 = prompt('Do I like coding?').toLowerCase();
if (response4 === answer1 || response4 === answer1[0]) {
  alert('You are correct, ' + userName + ' ! I like coding!');
} else if (response4 === answer2 || response4 === answer2[0]) {
  alert('Do you not like coding, ' + userName + ' ? I like it!');
}
    else {
  prompt('Please type-out yes or abbr y / n ');
}
console.log(userName + ' chose ' + response4 + ' as the 4th response.');

  //response5
var response5 = prompt('Do I wear socks with sandles?').toLowerCase();
if (response5 === answer2 || response5 === answer2[0]) {
  alert('You are correct, ' + userName + ' ! I DO NOT wear socks with sandles');
} else if (response5 === answer1 || response5 === answer1[0]) {
  alert('Are you crazy ' + userName + ' ? ONLY a PNW thing!');
}
    else {
  prompt('Please type-out yes or abbr y / n ');
}
console.log(userName + ' chose ' + response5 + ' as the 5th response.');

// Start the for/while loop for 6th question with 4 tries
var x = 11;
for (var i = 0; i < 4; i++) {
  var response6 = parseInt(prompt('How many miles in the sky is the stratosphere?'));
  if (response6 < x) {
    alert('I am sorry ' + userName + '. Your answer ' + response6 + ' is too low!');
  } else if (response6 > x) {
    alert ('Come back down ' + userName + '! You are too high up!');
  }
    else {
    alert('You must be super smart ' + userName + '! ' + x + ' is correct! 11 miles up!');
  }
}
console.log(userName + ' chose ' + response6 + ' as the 6th response.');
