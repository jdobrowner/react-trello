var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var Board = function() {
    var board = [];
    for (var i=0; i<3; i++) {
        board.push(<List />);
    }
    return (
        <div className="board">
            {board}
        </div>
    );
};

module.exports = Board;
