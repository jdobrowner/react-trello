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
    onAddInputChanged: function() {
      console.log('goobly gobble');
    },
    onAddSubmit: function(event) {
      event.preventDefault();
      console.log('submitted');
    },
    render: function() {
      return ( <List title={this.props.title} cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
    );
  }
});

module.exports = ListContainer;
