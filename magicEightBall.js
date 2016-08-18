// Magic Eight Ball Project

// Create a variable named userQuestion and make it a prompt() that
// asks the user to provide a question.With this, you can use the
// Magic Eight Ball to tell their fortune!

var userQuestion = prompt("What is your question?");

// Create another variable, and name it randomNumber. We need to
// generate a number between 0 and 7. You can accomplish this with
// Math.floor(), Math.random(), and multiplication.

var randomNumber = Math.floor(Math.random() * 7);

// Create one more variable named eightBall, and set it equal to an
// empty String: "". We will fill in this variable in the next steps,
// depending on the randomNumber variable.

var eightBall = "";

// We need to create a control flow that takes in the randomNumber
// we made earlier, and then assigns eightBall to a reply that a
// Magic Eight Ball would return. This utilizes switch statements
// to return 8 Magic Eight Ball phrases. If the randomNumber is 0,
// then return an answer, if randomNumber is 1, then return the
// next one, and so on...

switch(randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidely so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Don't count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Write a console.log for the userQuestion, stating what was asked,
// and a console.log() for the Magic Eight Ball's answer, eightBall.

console.log('The user asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);
