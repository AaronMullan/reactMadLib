import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight, wordNine, wordTen, wordEleven, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="adjective" value={wordOne} />
    <input type="text" placeholder="noun" value={wordTwo}/>
    <input type="text" placeholder="verb, past tense" value={wordTwo}/>
    <input type="text" placeholder="adverb" value={wordThree}/>
    <input type="text" placeholder="adjective" value={wordFour}/>
    <input type="text" placeholder="noun" value={wordFive}/>
    <input type="text" placeholder="noun" value={wordSix}/>
    <input type="text" placeholder="adjective" value={wordSeven}/>
    <input type="text" placeholder="verb" value={wordEight}/>
    <input type="text" placeholder="adverb" value={wordNine}/>
    <input type="text" placeholder="verb, past tense" value={wordTen}/>
    <input type="text" placeholder="adjective" value={wordEleven}/>
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  wordOne: PropTypes.string,
  wordTwo:PropTypes.string,
  wordThree:PropTypes.string,
  wordFour:PropTypes.string,
  wordFive:PropTypes.string,
  wordSix: PropTypes.string,
  wordSeven: PropTypes.string,
  wordEight: PropTypes.string,
  wordNine: PropTypes.string,
  wordTen: PropTypes.string,
  wordEleven: PropTypes.string,
};

export default Form;
