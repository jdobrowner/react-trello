var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var text = 'This is a card';
    return (
        <div className="card">
            <div className="text">{text}</div>
        </div>
    );
};

module.exports = Card;
