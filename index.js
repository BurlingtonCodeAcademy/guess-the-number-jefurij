const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();
}

//program creates and saves a random number between 1 to 100
// prompts wrongs guess to go higher or lower while recording guesses
// the following is used in this code but I am stuck

async function start() {
  while (true) {
    let answer = await ask("Are we done?");
    answer = answer.toLowerCase();
    if (answer.includes("yes")) {
      break;
    }
    console.log("Running that loop!");
  }
  console.log("You are done!");
  process.exit();
}

let count = 10;

while (count > 0) {
  console.log(count + '...');
  count = count - 1;
}

console.log('Blastoff!');

for (var i=0; i < 8; i++) {
  console.log(i);
}

for (let i = 4; i < 10; i+=2) {
    console.log('Outer i is now: ' + i);
    for (let i=0; i < 5; i++);
      console.log('Inner i is now: ' + i)
}
console.log(End i is now: ' + i);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    

const lineNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let lineNumber of lineNumbers) {

  console.log(poemLine(lineNumber));
}

// Prime-numbers.js
let startAt = 2
while (theNumber <= 100) {
    if (isPrime(theNumber)){
        console.log(theNumber)
        
    }
}



add
ƒ add(x, y) {
  let sum = x + y;
  return sum;
}
add(41,1)
42
x = 10
10
y = 5
5
add
ƒ add(x, y) {
  let sum = x + y;
  return sum;
}
