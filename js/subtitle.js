// This JavaScript code defines a function called changeSub that takes in a number num and changes the inner text of an element with the ID "subtitle" to the num-th element of an array called say.
// The say array is defined as an array of strings containing various greetings. The length of the say array is logged to the console.
// The code then defines a variable called howmany that stores the length of the say array. It then generates a random number between 0 and the value of howmany and stores it in the variable bRand. It uses this random number to select a random element from the say array and stores it in a variable called sayWhat. The inner text of the element with the ID "subtitle" is then set to the value of sayWhat.
// The code also defines a function called changeSplash that takes in a number num and changes the inner text of the element with the ID "subtitle" to the num-th element of the say array. It returns a string containing information about the change it made.
// Help generated by ChatGPT

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [
  "Welcome.",
  "Shoutout to Preston.",
  "Shoutout to Joel.",
  "Where is my Ad-Revenue.",
  "I've spent three months working on this.",
  "Cookie.",
  "Meow.",
  "Minecraft.",
  "Fortnite.",
  "wsg gang.",
];
console.log("[INFO] " + say.length + " splash texts were loaded!")

var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
