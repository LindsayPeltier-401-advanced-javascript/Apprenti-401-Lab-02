'use strict';

const validatorModule = require('../lib/validator.js');
const faker = require('faker');
const validatorClass = require('../lib/validatorClass.js');

let types = ['Module', 'Class'];

function getValidator(type) {
  switch (type) {
    case 'Module':
      return validatorModule;
    case 'Class':
      return validatorClass;
    default:
      return {};
  }
}

const schema = {
  fields: {
    id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'number',
      required: true,
    },
    children: {
      type: 'array',
      valueType: 'string',
    },
  },
};

let string = 'yes';
let number = 1;
let array = ['a'];
let object = {
  x: 'y',
};
let func = () => { };
let boolean = false;

describe('data type validation of', () => {
  types.forEach(type => {
    const validator = getValidator(type);

    it('strings', () => {
      expect(validator.isString(string)).toBeTruthy();
      expect(validator.isString(number)).toBeFalsy();
      expect(validator.isString(array)).toBeFalsy();
      expect(validator.isString(object)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(boolean)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(string)).toBeFalsy();
      expect(validator.isNumber(number)).toBeTruthy();
      expect(validator.isNumber(array)).toBeFalsy();
      expect(validator.isNumber(object)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(boolean)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(string)).toBeFalsy();
      expect(validator.isArray(number)).toBeFalsy();
      expect(validator.isArray(array)).toBeTruthy();
      expect(validator.isArray(object)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(boolean)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(string)).toBeFalsy();
      expect(validator.isObject(number)).toBeFalsy();
      expect(validator.isObject(array)).toBeFalsy();
      expect(validator.isObject(object)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(boolean)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(string)).toBeFalsy();
      expect(validator.isBoolean(number)).toBeFalsy();
      expect(validator.isBoolean(array)).toBeFalsy();
      expect(validator.isBoolean(object)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(boolean)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(string)).toBeFalsy();
      expect(validator.isFunction(number)).toBeFalsy();
      expect(validator.isFunction(array)).toBeFalsy();
      expect(validator.isFunction(object)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(boolean)).toBeFalsy();
    });
  });
});

describe('schema validation', () => {
  types.forEach(type => {
    const validator = getValidator(type);
    it('isValid() function validates a good record.', () => {

      let testRecord = {};

      for (let field in schema.fields) {
        switch (schema.fields[field].type) {
          case 'boolean':
            testRecord[field] = faker.random.boolean();
            break;
          case 'number':
            testRecord[field] = faker.random.number();
            break;
          case 'string':
            testRecord[field] = faker.random.word();
            break;
          case 'array':
            testRecord[field] = [];
            testRecord[field].push(faker.random.arrayElement());
            testRecord[field].push(faker.random.arrayElement());
            break;
          default:
            null;
        }
      }
      expect(validator.isValid(schema, testRecord)).toBeTruthy();
    });

    it('isValid() function returns undefined with missing requirements', () => {

      let testRecord = {};
      for (let field in schema.fields) {
        if (schema.fields[field].required) {
          testRecord[field] = null;
        }
      }
      expect(validator.isValid(schema, testRecord)).toBeFalsy();
    });
  });
});

const personRules = {
  fields: {
    id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'number',
      required: true,
    },
    children: {
      type: 'array',
      valueType: 'string',
    },
  },
};

const Bob = {
  id: '123-45-6789',
  name: 'Bob',
  age: 40,
  children: [],
};

const Sally = {
  id: 19,
  name: 'Sally Sally',
  children: [],
};

const Howard = {};

const arrayRules = {
  fields: {
    test: {
      type: 'array',
      valueType: 'number',
    },
  },
};

const Lola = {
  test: ['Lola ', 34],
};

describe('validator module performs complex validations', () => {
  types.forEach(type => {
    const validator = getValidator(type);
    it('Validates an object with a set of rules against an object', () => {
      expect(validator.isValid(personRules, Bob)).toBeTruthy();
    });

    it('validates an object with a set of rules against an object that does not pass', () => {
      expect(validator.isValid(personRules, Sally)).toBeFalsy();
    });

    it('does not validate rules against an empty object', () => {
      expect(validator.isValid(personRules, Howard)).toBeFalsy();
    });

    it('validates a value array against an approved list', () => {
      expect(validator.isValid(arrayRules, Lola)).toBeFalsy();
    });
  });
});