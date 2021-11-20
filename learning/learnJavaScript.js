var oldDontUse = 'Really, dont';
console.log(oldDontUse); //prints "really don't" to console

let theseCanChange = 'Use if you want things to change';
console.log(theseCanChange); //prints Use if you want things to change
let theseCanChange = 'like this';
console.log(theseCanChange); //prints like this

const cantChange = 'Use if youre really sure'
//needs a varible, and can't be changed like let



let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables.
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
levelUp++; //adds 1
levelUp--; //subtracts 1
console.log(`I ${oldDontUse} understand the percent sign thing`); //use to put Var into a string
console.log(typeof levelUp); //prints the Var type, in this case a number




// if, and, else
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
}



//short circut
  let username = ''; //if we put a name here it would change the result of the next line
let defaultName = username || 'Stranger'; //defaults to first non Falsey answer L>R 
console.log(defaultName); // Prints: Stranger


let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//favoritePhrase === 'Love That!' evaluates to a true statement



let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.')
  break;
}



function sayThanks(name){
    console.log("Thank you for your purchase " + name + "! We appreciate your business.");
  }
  sayThanks('Susan');
  sayThanks('Tom');
  sayThanks('Cole');

//these do the same thing but the bottom one is better because arrays and loops are cool
 
function sayThanks(name){
    console.log("Thank you for your purchase " + name + "! We appreciate your business.");
  }
let storeNames = ['Susan', 'Tom', 'Cole'];
for (s = 0; s < storeNames.length; s++){
sayThanks(storeNames[s]);
}

function plantNeedsWater(day) // right? double check but this should work the same as the other two 

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
// THESE DO THE SAME THING 
  const plantNeedsWater = function(day){
    if(day === 'Wednesday'){
      return true
    } else {
      return false
    }
  }
  plantNeedsWater('Wednesday');
console.log(plantNeedsWater('Wednesday'));




const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    } else{
      let lightWaves = 'Dark'
      console.log(lightWaves);  //fuq yeah
    }
    console.log(lightWaves);
  };
logVisibleLightWaves();




const bobsFollowers = ['tim', 'june', 'scott', 'may'];
const tinasFollowers = ['june', 'marge', 'tim'];
const mutualFollowers = [];
for (let i=0; i < bobsFollowers.length; i++){
  for (let k=0; k < tinasFollowers.length; k++){
    if(bobsFollowers[i] === tinasFollowers[k])
    mutualFollowers.push(tinasFollowers[k]);
  }
}
console.log(mutualFollowers)


const mutualFollowersLucasVersion = bobsFollowers.filter(follower => tinasFollowers.includes(follower))






//breaks give you another out condition for loops
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i=0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G."){
    break;
  }
}
console.log("And if you don't know, now you know.");



//wow look map things
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(function(num){
  return num/100
})




const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimalIndex = animals.findIndex(animal =>{
  return animal === 'elephant';
})
const startsWithS = animals.findIndex(sss =>{
  return sss[0] === 's'; //I think this works because animals is becoming the Argument of sss? but sss is 
  //for sure becoming animals I just cant remember what that's called
})




const kelvin = 272;
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log('The tempature is ' + fahrenheit + ' degrees Fahrenheit.')



//fix this so that it can accept a num below 2 and not break
const myAge = 25;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = (myAge - 2);
laterYears = laterYears * 4;
//laterYears *= 4; SAME THING, WEIRD RIGHT?
console.log(earlyYears, laterYears)
const myAgeInDogYears = earlyYears + laterYears;
let myName = 'William Christian Daniel'.toLowerCase();
console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)



const userName = '';
if(userName){
  console.log(`Hello ${userName}`);
} else {
  console.log('Hello there');
}
const userQuestion = 'what?';
console.log(userQuestion);
let randomNum = Math.floor(Math.random() * 8);
const eightBallAnswers = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
console.log(eightBallAnswers[randomNum]);



let raceNumber = Math.floor(Math.random() * 1000);
let regOnTime = true
let runnersAge = 25;
if (runnersAge > 18 && regOnTime === true){
  return raceNumber + 2000, console.log(`Your start time is 9:30am, and your number is ${raceNumber}!`)
} else if (runnersAge > 18 && regOnTime === false){
  return racenumber + 1000, console.log(`Your start time is 11:00am, and your number is ${raceNumber}!`)
} else if (runnersAge < 18){
  console.log(`Your start time is 12:30am, and your number is ${raceNumber}!`)
} else {
  console.log("Whoops, looks like you didn't enter any information")
}



//classes are important, apparently 
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);
console.log(square.area); // 100