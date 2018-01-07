const expect = require('chai').expect
const dummy = require('../dummy')

describe('dummy', function() {
  it('should be true', function() {
    expect(dummy()).to.be.true
  })
})
