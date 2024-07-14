// Function to convert a string to upper case
var getBig = function (str) {
    return str.toUpperCase();
};

// Function to convert a string to lower case
var getSmall = function (str) {
    return str.toLowerCase();
};

// Example usage
var planet = "Jupiter";
var bigPlanet = getBig(planet);
var smallPlanet = getSmall(planet);

console.log(planet + " becomes " + bigPlanet);
console.log(planet + " becomes " + smallPlanet);
