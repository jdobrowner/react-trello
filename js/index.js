require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board lists={["Superman", "Batman", "Wolverine"]} title="Super Heros"/>, document.getElementById('app'));
});
