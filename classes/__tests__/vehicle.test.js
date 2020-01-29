'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');
const VehicleClass = require('../vehicle-class.js');

let types = ['Constructor'];
let classTypes = ['Class'];

describe('Vehicles', () => {

  describe('Car', () => {

    function getCar(type) {
      switch (type) {
        case 'Constructor':
          return new VehicleConstructor.Car('foo');
        default:
          return {};
      }
    }

    function getCarClass(type) {
      switch (type) {
        case 'Class':
          return new VehicleClass.Car('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      });
    });

    classTypes.forEach(type => {
      let car2 = getCarClass(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car2.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car2.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car2.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car2.wheelie).toBeUndefined();
      });
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch (type) {
        case 'Constructor':
          return new VehicleConstructor.Motorcycle('foo');
        default:
          return {};
      }
    }

    function getMotorcycleClass(type) {
      switch (type) {
        case 'Class':
          return new VehicleClass.Motorcycle('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    });

    classTypes.forEach(type => {

      let motorcycle2 = getMotorcycleClass(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle2.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle2.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle2.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle2.wheelie()).toBeTruthy();
      });

    });

  });

});