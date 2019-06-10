/*
1. have lower and upper bound
2. Guess the Number
3. Ask higher or lower
4. If correct: done, otherwise update bound, go back to step 1
*/

/*
asyc wait is for input only
if-else statements
variable assignments
if (guess <= 50) {
  console.log("");
} else {
  console.log("denied");
}
use loops probably while loops to keep

do I need variables for 100 guesses?
I don't think so bc, I have asyc and while looping from 1-100
I also have hugher and lower
*/

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

guess();
async function guess(){

let lower = 1;
let upper = 100;
let found = false;
let guess;


while(!found){
  guess = Math.floor(Math.rand()* upper)+ lower
  


  

  if(input === 'H')
  {
      lower = guess;
      //do what if higher
  }
  if(input === 'F'){
      found = true;
  }
}

}