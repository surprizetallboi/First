let curNum = 1;
let prevNum = 1;
let seq = [1, 1];

while (curNum < 100000000000000) {
  const addedNum = curNum + prevNum;
  prevNum = curNum;
  curNum = addedNum;
  seq.push(curNum);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What number from the sequence would you like?", (n) => {
  console.log(seq[n]);
  readline.close();
});

//console.log(seq)

/* Lucas's npm bull
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What number from the sequence would you like? ", function(n){
    console.log(seq[n]);
});
*/
