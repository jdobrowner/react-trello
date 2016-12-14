var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function(props) {
    var cards = [];
    for (var i = 0; i < props.cards.length; i++) {
      cards.push(<Card text={props.cards[i]} key={i} />);
    }
    return (
      <div className="list">
          <div className="list-title">{props.title}</div>
          {cards}
          <form onSubmit={props.onAddSubmit}>
            <input type="text" onChange={props.onAddInputChanged} />
            <input type="submit" />
          </form>
      </div>
    );
}

module.exports = List;
