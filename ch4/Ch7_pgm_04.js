// Moving a point in 2D

var point1;
var point2;
var movedPoint;
var showPoint;

var move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

var showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

point1 = { x: 2, y: 5 };

// Change the amount of movement
movedPoint = move(point1, { x: 3, y: -4 });

showPoint(point1);
console.log("Move 3 across and 4 down:");
showPoint(movedPoint);

// Function to reflect a point in the x-axis
var reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

// Function to rotate a point 90 degrees anticlockwise around (0, 0)
var rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

// Reflecting the point
var reflectedPoint = reflectX(movedPoint);
console.log("Reflected point:");
showPoint(reflectedPoint);

// Rotating the point
var rotatedPoint = rotate90(movedPoint);
console.log("Rotated point (90 degrees anticlockwise):");
showPoint(rotatedPoint);
