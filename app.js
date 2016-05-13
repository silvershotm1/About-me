var userName = prompt('Hi, thank you for visiting my page! What is your name?');
alert('Nice to meet you, ' + userName + '. I\'m going to ask you some questions about me.');
console.log('The user\'s name is ' + userName + ' and he is funky');

  // The start of 5 questions

var tally = 0;
var answer1 = 'yes';
var answer2 = 'no';

  //response1
function question1() {
  var response1 = prompt('Do I chew gum often?').toLowerCase();
  if (response1 === answer2 || response1 === answer2[0]) {
    alert('You are correct, ' + userName + ' ! I don\'t chew gum often!');
    tally++;
  } else if (response1 === answer1 || response1 === answer1[0]) {
    alert('You are incorrect, ' + userName + '. I don\'t chew gum often!');
  } else {
    prompt('Please type-out yes / no or abbr y / n ');
  }
  console.log(userName + ' chose ' + response1 + ' as the 1st response .');
}

question1();

  //response2

function question2() {
  var response2 = prompt('Do I like Indian Cuisine?').toLowerCase();
  if (response2 === answer2 || response2 === answer2[0]) {
    alert('You are correct, ' + userName + ' ! I can\'t stand Indian food');
    tally++;
  } else if (response2 === answer1 || response2 === answer1[0]) {
    alert('You are incorrect, ' + userName + '. I don\'t like Indian Cuisine!');
  } else {
    prompt('Please type-out yes or abbr y / n ');
  }
  console.log(userName + ' chose ' + response2 + ' as the 2nd response.');
}

question2();

  //response3

function question3() {
  var response3 = prompt('Have I ever been to Australia?').toLowerCase();
  if (response3 === answer2 || response3 === answer2[0]) {
    alert('You are correct, ' + userName + ' ! I have never been to Australia');
    tally++;
  } else if (response3 === answer1 || response3 === answer1[0]) {
    alert('You are incorrect, ' + userName + '. I would love to go to Australia');
  } else {
    prompt('Please type-out yes or abbr y / n ');
  }
  console.log(userName + ' chose ' + response3 + ' as the 3rd response.');
}

question3();

  //response4

function question4() {
  var response4 = prompt('Do I like coding?').toLowerCase();
  if (response4 === answer1 || response4 === answer1[0]) {
    alert('You are correct, ' + userName + ' ! I like coding!');
    tally++;
  } else if (response4 === answer2 || response4 === answer2[0]) {
    alert('Do you not like coding, ' + userName + ' ? I like it!');
  } else {
    prompt('Please type-out yes or abbr y / n ');
  }
  console.log(userName + ' chose ' + response4 + ' as the 4th response.');
}

question4();

  //response5

function question5() {
  var response5 = prompt('Do I wear socks with sandles?').toLowerCase();
  if (response5 === answer2 || response5 === answer2[0]) {
    alert('You are correct, ' + userName + ' ! I DO NOT wear socks with sandles');
    tally++;
  } else if (response5 === answer1 || response5 === answer1[0]) {
    alert('Are you crazy ' + userName + ' ? ONLY a PNW thing!');
  } else {
    prompt('Please type-out yes or abbr y / n ');
  }
  console.log(userName + ' chose ' + response5 + ' as the 5th response.');
}

question5();

// Start the for/while loop for 6th question with 4 tries


function question6() {
  var q6answer = 11;
  var q6tries = 4;
  while (q6tries > 0) {
    var response6 = parseInt(prompt('How many miles in the sky is the stratosphere?'));
    if (response6 < q6answer) {
      alert('I am sorry ' + userName + '. Your answer ' + response6 + ' is too low!');
      q6tries--;
    } else if (response6 > q6answer) {
      alert ('Come back down ' + userName + '! You are too high up!');
      q6tries--;
    } else if (response6 === q6answer) {
      alert('Correct, you must be super smart ' + userName + '! ' + q6answer + ' is correct! 11 miles up!');
      tally++;
      q6tries = 0;
    } else {
      alert('Come on now ' + userName + ' ! I need for you to give me a number!');
    }
    console.log(userName + ' chose ' + response6 + ' as the 6th response.');
  }
}

question6();

// Start the array for 7th question with 6 tries.

function question7() {
  var myStates = ['alabama', 'texas', 'kentucky', 'tennessee'];
  var chances = 6;
  var userStatus = false;
  while (chances > 0) {
    var response7 = prompt('Where have I lived in the United States?').toLowerCase();
    for (var i = 0; i < myStates.length; i++) {
      if (response7 === myStates[i]) {
        userStatus = true;
      }
    }
    if (userStatus === true) {
      alert ('Congrats, you are correct ' + userName);
      tally++;
      chances = 0;
    } else {
      chances--;
      alert('Sorry, ' + userName + ', you have ' + chances + ' chances remaining.');
    }
  }
  if (userStatus === false) {
    alert('I guess you\'ve run out of guesses, ' + userName + '. Here are all the stats I\'ve lived in: ' + myStates);
  }
}

question7();
alert('Thanks for taking the time to take my quiz! Your total score is ' + tally + ' / 7');
