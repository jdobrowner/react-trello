var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

var Board = function(props) {
    return (
        <div className="board">
            <div className="board-title">board</div>
            <ListContainer title="Weekend Cleaning "/>
        </div>
    );
};

module.exports = Board;
