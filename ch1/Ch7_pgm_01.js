// Passing a function an object as an argument

var planet1;
var planet2;  // Declare a second planet
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

// Define the second planet object
planet2 = {
    name: "Earth",
    position: 3,
    type: "Terrestrial",
    radius: 6371,
    sizeRank: 3
};

// Function to get detailed information about a planet
getPlanetInfo = function (planet) {
    return planet.name + 
           ": planet number " + planet.position + 
           ", Type: " + planet.type + 
           ", Radius: " + planet.radius + " km" + 
           ", Size Rank: " + planet.sizeRank;
};

// Log details of the first planet
console.log(getPlanetInfo(planet1));

// Log details of the second planet
console.log(getPlanetInfo(planet2));
