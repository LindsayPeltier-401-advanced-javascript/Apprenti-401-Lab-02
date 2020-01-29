'use strict';

/**
 * Vehicle
 * @class
 */

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'Movement';
  }
  stop() {
    return 'Stopped';
  }
}

/**
 * Car
 * @class
 */

class Car extends Vehicle {
  constructor(model) {
    super(name, 4);
  }
}

/**
 * Motorcycle
 * @class
 */
class Motorcycle extends Vehicle {
  constructor(model) {
    super(name, 2);
  }
}

module.exports = { Car, Motorcycle };
