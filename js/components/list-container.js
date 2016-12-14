var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      inputText: '',
      cards: []
      }
    },
    onAddInputChanged: function(event) {
      this.setState({ inputText: event.target.value });
    },
    onAddSubmit: function(event) {
      event.preventDefault();
      let updatedCards = this.state.cards;
      updatedCards.push(this.state.inputText);
      this.setState({ cards: updatedCards });
    },
    render: function() {
      return ( <List title={this.props.title} cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
    );
  }
});

module.exports = ListContainer;
