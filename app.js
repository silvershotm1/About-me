  // This is a comment
  var userName = prompt('Hi, thank you for visiting my page! What is your name?');
  alert('Nice to meet you, ' + userName + ' I\'m going to ask you some questions about me.');
  console.log('The user\'s name is ' + userName + 'and he is funky');

  var response1 = prompt('Do I have three cats?').toLowerCase();
  var answer1 = 'yes';
  // var userName = 'test';

  if (response1 === answer1 || response1 === answer1[0]) {
    alert('You are correct, ' + userName + ' ! My cats are Pants, Jones, and Taylor');
  } else {
    alert('Yes, ' + userName + '. I really do have 3 cats!');
  }
