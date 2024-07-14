var message = "We choose to go to the Moon!";

// 1) Find the index of where 'go' starts
var goIndex = message.indexOf("go");
console.log("Index of 'go':", goIndex); // Should print the index of 'go'

// 2) Display the word 'choose'
var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6)); // Extracts 'choose'

// 3) Find the index of 'oo' in 'Moon' using lastIndexOf
var moonIndex = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon':", moonIndex); // Should print the index of 'oo'
