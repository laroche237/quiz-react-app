import React from 'react';
import Option from './Option';
import './Question.css';


const Question = ({ question, questionNumber, totalQuestions,handleAnswerChange}) => {

  return (
    <div className='question-section'>
      <div className='question-count'>
        <span>Question {questionNumber}</span>/{totalQuestions}
      </div>
      <div className='question-text'>{question.questionText}</div>
      <div className='answer-section'>
        {question.answerOptions.map((option, index) => (
          <Option
            key={index}
            option={option}
            handleAnswerChange={handleAnswerChange}
          />
        ))}
       
        
      </div>
    </div>
  );
};

export default Question;
