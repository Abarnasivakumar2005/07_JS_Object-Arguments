// A function that adds properties to an object

var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r; // Surface area
    planet.volume = 4 * 3.142 * r * r * r / 3; // Volume
    planet.diameter = 2 * r; // Diameter
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("Surface area = " + planet.area + " square km");
    console.log("Volume = " + planet.volume + " cubic km");
    console.log("Diameter = " + planet.diameter + " km"); // Display diameter
};

// Calculate sizes for planet1
calculateSizes(planet1);
// Display sizes for planet1
displaySizes(planet1);
