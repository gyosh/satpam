# satpam
-----
Satpam is a wrapper for some nodejs validator libraries, I made `Satpam` so it's easy to create
custom validator with parameters and custom validation messages.

[![Build Status](https://travis-ci.org/sendyhalim/satpam.svg)](https://travis-ci.org/sendyhalim/satpam)

## Quick Usage
```js
var satpam = require('satpam');
var rules = {
  name        : ['required']
  officeEmail : ['email'],
  phone       : ['required', 'numeric']
};


var input = {
  name: 'Sendy',
  title: 'Lord',
  officeEmail: 'invalid email',
  phone: 'hi there123'
};

var result = satpam.validate(rules, input);

if (result.success === true) {
  // valid
} else {
  // invalid
  result.messages.officeEmail.email === 'OfficeEmail must be email';
  result.messages.phone.number === 'Phone must be numeric';

  // or get all messages in array form
  result.messages.messageArray[0] = 'OfficeEmail must be email';
  result.messages.messageArray[1] = 'Phone must be numeric';
}
```

## Available Rules
- alpha
- alphanumeric
- date
- email
- image
- numeric
- required
- url
- string

## Custom rules
```js
validator.addCustomValidation('must-be-ironman', function(val) {
  return val === 'ironman';
});

validator.setValidationMessage('must-be-ironman', 'Not ironman D:');

// with parameters
validator.addCustomValidation('range:$1:$2', function(val, ruleObj) {
  return val >= ruleObj.params[0] && val <= ruleObj.params[1];
});

// if validation fails it will set message to:
// "PropertyName must between 0 and 30"
validator.setValidationMessage('range:$1:$2', '<%= propertyName %> must between <%= ruleParams[0] %> and <%= ruleParams[1] %>');

```

## TODOs

- Add more basic validation rules
- Validate file types

More examples -> [Here](https://github.com/sendyhalim/satpam/blob/master/tests/validator.spec.js)
