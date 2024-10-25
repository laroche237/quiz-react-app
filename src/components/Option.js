import React from 'react';
import './Option.css';

const Option = ({ option, handleAnswerChange, chrono}) => {
  return (
    <button className='option-button' onClick={() => handleAnswerChange(option.isCorrect)}>
      {option.answerText}
    {chrono}
    </button>
  );
};

export default Option;
