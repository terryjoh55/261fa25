// homework!!!

// Control Flow
// - Determines the order in which statements in a program are executed
// - JavaScript executes code line-by-line from top to bottom unless control structures (like conditionals or loops) alter that flow.

// *if* 
// - Executes a block of code only if a specified condition is true.
let midiNote = 64;
if (midiNote >= 0 && midiNote <= 127) {
  console.log("Valid MIDI note:", midiNote);
}


// *if-else* 
let anotherNote = 150;
if (anotherNote >= 0 && anotherNote <= 127) {
  console.log("Valid MIDI note.");
} else {
  console.log("Invalid MIDI note.");
}


// *else-if* for Multiple Conditions
let thirdNote = 64;
if (thirdNote < 64) {
  console.log("MIDI note is smaller than 64.");
} else if (thirdNote > 64) {
  console.log("MIDI note is greater than 64.");
} else {
  console.log("MIDI note is exactly 64.");
}

// Loops 
// - allow us to repeat code multiple times.

// *while* Loop
let count = 0;
while (count < 3) {
  console.log("Happy Thursday");
  count++;
}

// *while-else* Loop
let counter = 0;
while (counter < 3) {
  counter++;
  console.log("Happy Thursday");
}
if (counter >= 3) {
  console.log("Happy Friday");
}

// *for* Loop
for (let i = 0; i < 128; i++) {
  console.log(`The next MIDI note value is ${i}`);
}

// incrementing by 2
for (let i = 0; i < 128; i += 2) {
  console.log(`The next MIDI note value is ${i}`);
}

// finding numbers divisible by 7 and 5 between 1500 and 2700
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Nested for-loop
for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
      row += j.toString();
    }
  }
  console.log(row);
}

// Recursion
// - a computational problem with solutions to smaller instances of the same problem
// - functions that call themselves. 

// Infinite recursion
function func() {
  console.log("Lovely!");
  func();
}
// Uncomment to test (it will crash your browser)
// func();

// Recursion with a stop condition
function recursiveFunc(count) {
  if (count < 0) {
    return;
  }
  console.log(`${count} Lovely!`);
  recursiveFunc(count - 1);
}
recursiveFunc(5);