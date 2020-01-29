
'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class');

/**
 *  Implement a car using a Constructor
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */
const chevrolet = new VehicleConstructor.Car('Camaro');
console.log(chevrolet.name, chevrolet.drive(), chevrolet.stop());

/**
 *  Implement a motorcycle using a Constructor
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */
const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

/**
 * 
 *  Implement a car using a Class
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */
const jeep = new VehicleClass.Car('Jeep Compass');
console.log(jeep.name, jeep.drive(), jeep.stop());

/**
 * 
 *  Implement a motorcycle using a Class
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */
const bike = new VehicleClass.Motorcycle('generic bike');
console.log(bike.name, bike.drive(), bike.stop());