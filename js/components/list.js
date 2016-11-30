var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function() {
    var list = [];
    for (var i=0; i<3; i++) {
        list.push(<Card />);
    }
    return (
        <div className="list">
            {list}
        </div>
    );
};

module.exports = List;
