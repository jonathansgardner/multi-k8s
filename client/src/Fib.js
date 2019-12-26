import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    index: ''
  }

  componentDidMount() {
    this.fetchIndexes();
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.seenIndexes !== this.state.seenIndexes ) {
      this.fetchIndexes();
    }
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({ seenIndexes: seenIndexes.data });
  }

  handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Enter an index: </label>
          <br />
          <input value={ this.state.index } onChange={ e => this.setState({ index: e.target.value })} />&nbsp;
          <button>Submit</button>
        </form>
        <p>Indexes I have seen:</p>
        { this.renderSeenIndexes() }
      </div>
    );
  }
}

export default Fib;
