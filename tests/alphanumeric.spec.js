'use strict';

var expect = require('chai').expect;
var validator = require('../');

describe('Alphanumeric validator', function () {
  var simpleRules = {
    name: ['alphanumeric']
  };

  var getTestObject = function () {
    return {
      name: 'sendy123',
    };
  };

  it('should success', function () {
    var result = validator.validate(simpleRules, getTestObject());
    var err = result.messages;

    expect(result.success).to.equal(true);
    expect(err).to.not.have.property('name');
  });

  it('should fail', function () {
    var testObj = getTestObject();
    testObj.name += '_ hehe';
    var result = validator.validate(simpleRules, testObj);
    var err = result.messages;

    expect(result.success).to.equal(false);
    expect(err).to.have.property('name');
    expect(err.name.alphanumeric).to.equal('Name may only contain letters and numbers.');
  });
});
