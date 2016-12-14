var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

var lists = function(listArray) {
  var output = [];
  var i = 0;
  listArray.forEach( function(list) {
    output.push(<ListContainer title={list} key={i++} />);
  });
  return output;
}

var Board = function(props) {
    return (
        <div className="board">
            <div className="board-title">{props.title}</div>
            {lists(props.lists)}
        </div>
    );
};

module.exports = Board;
