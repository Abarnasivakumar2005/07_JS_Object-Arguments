// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

// Testing line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log(line(i));
}

// Function to return a string of spaces
var spaces = function (numSpaces) {
  numSpaces = Math.max(0, Math.min(40, numSpaces));
  return ' '.repeat(numSpaces);
};

// Function to draw an empty box
var emptyBox = function (width) {
  width = Math.max(2, Math.min(40, width)); // Ensure minimum width of 2
  console.log(line(width)); // Top border
  for (var i = 0; i < 3; i++) { // Height of 3
      console.log("=" + spaces(width - 2) + "="); // Sides with spaces
  }
  console.log(line(width)); // Bottom border
};

// Example calls
emptyBox(12);
