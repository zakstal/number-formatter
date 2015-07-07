'use strict';

var should = require('chai').should();
var numFormatter = require('../index');

describe('#numFormatter', function () {
   it('should convert single digits', function () {
        numFormatter(1).should.equal('1');
   });

    it('should convert double digits', function () {
        numFormatter(12).should.equal('12');
    });

    it('should convert tripple digits', function () {
        numFormatter(100).should.equal('100');
    });

    it('should convert four digits', function () {
        numFormatter(1000).should.equal('1,000');
    });

    it('should convert five digits', function () {
        numFormatter(12000).should.equal('12,000');
    });

    it('should convert six digits', function () {
        numFormatter(120000).should.equal('120,000');
    });

    it('should convert nine digits', function () {
        numFormatter(120000000).should.equal('120,000,000');
    });
});