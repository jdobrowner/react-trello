var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function(props) {
    return (
      <div className="list">
          <div className="list-title">{props.title}</div>
          <Card text="fuck you" />
          <Card text="balls" />
          <Card text="butt muffin" />
          <form onSubmit={props.onAddSubmit}>
            <input type="text" onChange={props.onAddInputChanged} />
            <input type="submit" />
          </form>
      </div>
    );
}

module.exports = List;
