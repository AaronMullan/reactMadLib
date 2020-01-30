import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import styles from '../App.css';

export default class Madlib extends Component{
  state = {
    showResult: false,
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    const inputs = [...event.target].map(input => input.value);
    this.setState({ words: inputs });
  };

  render() {
    const { showResult, words } = this.state;
    return (
      <>
        <div className={styles.Madlib}>
          {!showResult && <Form onSubmit={this.handleSubmit} />}
          {showResult && <Result words={ words } closeResult={this.toggleResult} />}
        </div>
      </>
    );
  }
}
