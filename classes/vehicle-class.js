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
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }
}

/**
 * Car
 * @class
 */

class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}

/**
 * Motorcycle
 * @class
 */
class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {
  Car, Motorcycle,
};
