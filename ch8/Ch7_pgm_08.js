var message = "We choose to go to the Moon!";

// Log specific parts of the message
console.log(message.substr(27, 5)); // Moon!
console.log(message.substr(10, 9));  // go to the
console.log(message.substr(0, 10));   // We choose

// Investigate behavior when omitting the second argument
console.log(message.substr(3)); // choose to go to the Moon!

// Using negative numbers as arguments
console.log(message.substr(-6, 5)); // Moon!
console.log(message.substr(-12));    // to the Moon!
