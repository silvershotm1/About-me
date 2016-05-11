  // This is the initial prompt asking the user their name

  var userName = prompt('Hi, thank you for visiting my page! What is your name?');
  alert('Nice to meet you, ' + userName + ' I\'m going to ask you some questions about me.');
  console.log('The user\'s name is ' + userName + 'and he is funky');

  // The start of 5 questions
  var response1 = prompt('Do I chew gum often?').toLowerCase();
  var answer1 = 'no';
  if (response1 === answer1 || response1 === answer1[0]) {
    alert('You are correct, ' + userName + ' ! On few occasions and not everyday');
  } else if (response1 === !answer1 || response1 === !answer[0]) {
    alert('Yes, ' + userName + '. I really do have 3 cats!');
  }
    else {
    prompt('Please type-out yes or abbr y / n ');
  }

  var response2 = prompt('Do I like Indian Cuisine?').toLowerCase();
  var answer2 = 'no';

  if (response2 === answer2 || response2 === answer2[0]) {
    alert(userName + '! I don\'t like Indian Cuisine!');
  } else {
    alert('That\'s is correct ' + userName + '! I really really don\'t like it!');
    console.log('You replied with answering' + response2);
  }
  var response3 = prompt('Have I ever been to Australia?').toLowerCase();
  var answer3 = 'no';

  if (response3 === answer3 || response3 === answer3[0]) {
    alert('You\'re right! ' + userName + '. I have never been to Australia!');
  } else {
    alert('I have never been to Australia, ' + userName + ' but would love to go');
    console.log('You responded with answering ' + response3);
  }
  var response4 = prompt('Do I like coding?').toLowerCase();
  var answer4 = 'yes';

  if (response4 === answer4 || response4 === answer4[0]) {
    alert('That is it! I do enjoy coding and learning new things with coding!');
  } else {
    alert(userName + ' do you not like coding? I do!');
    console.log('You responded with answering ' + response4);
  }
  var response5 = prompt('Do I wear socks with sandles?').toLowerCase();
  var answer5 = 'no';

  if (response5 === answer5 || response5 === answer5[0]) {
    alert('I absolutely DO NOT wear sox with sandles ' + userName + '!');
  } else {
    alert('I think that sox and sandles is a Pacific North West thing!');
    console.log('You responded with answering ' + response5);
  }
