'use strict';

var should = require('chai').should();
var einrcore = require('../');

describe('#versionGuard', function() {
  it('global._einrcore should be defined', function() {
    should.equal(global._einrcore, einrcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      einrcore.versionGuard('version');
    }).should.throw('More than one instance of einrcore');
  });
});
