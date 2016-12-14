var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

var Board = function(props) {
    return (
        <div className="board">
            <div className="board-title">{props.title}</div>
            <ListContainer title={props.lists[0]} />
        </div>
    );
};

module.exports = Board;
