'use strict';

let validator = module.exports = {};

validator.isValid = (schema, input) => {

  let valid = true;

  for (let fieldName in schema.fields) {

    let field = schema.fields[fieldName];

    let required = field.required ? validator.isTruthy(input[fieldName]) : true;

    let type = field.type ? validator.isCorrectType(input[fieldName], field) : true;

    if (!(required && type)) {
      valid = false;
    }
  }
  return valid;
};

validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isObject = (input) => {
  return typeof input === 'object' && !(input instanceof Array);
};

validator.isArray = (input, valueType) => {
  return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isTruthy = (input) => {
  return !!input;
};

validator.isCorrectType = (input, field) => {

  switch (field.type) {
    case 'string': return validator.isString(input);
    case 'number': return validator.isNumber(input);
    case 'array': return validator.isArray(input, field.valueType);
    case 'object': return validator.isObject(input);
    case 'boolean': return validator.isBoolean(input);
    default: return false;
  }

};