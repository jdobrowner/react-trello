var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');

console.log(Board);

describe('poop', function() {
  it('should render a board', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Board lists={["Superman", "Batman", "Wolverine"]} title="Super Heros" />);
    var result = renderer.getRenderOutput();
    result.should.have.components;
    result.should.have.props;
  });
});
