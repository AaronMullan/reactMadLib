import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, onSubmit }) => (

  <form onSubmit={onSubmit}>
    <input type="text" placeholder="adjective"  />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="verb, past tense" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="verb" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="verb, past tense"/>
    <input type="text" placeholder="adjective" />
    <button>Create Madlib</button>
    <button type="Reset">Reset</button>
  </form>
   
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func
};

export default Form;
