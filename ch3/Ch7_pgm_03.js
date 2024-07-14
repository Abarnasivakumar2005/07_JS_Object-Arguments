// A function to create cars

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color) {
    return {
        make: make,
        model: model,
        year: year,
        color: color
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + " - Color: " + car.color;
};

// Creating car objects
car1 = buildCar("Toyota", "Camry", 2020, "Blue");
car2 = buildCar("Honda", "Civic", 2022, "Red");

// Displaying car information
console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
