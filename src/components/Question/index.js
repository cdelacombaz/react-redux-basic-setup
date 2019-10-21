import React, { Fragment } from 'react';

import './styles.css';

const Question = props => {
  const { question } = props
  const answers = [...question.incorrect_answers, question.correct_answer]
  return (
    <Fragment>
      <p className={'Question-question'} dangerouslySetInnerHTML={{ __html: question.question }} key={question.id} />
      {answers.map(answer => <div className='Question-answer' dangerouslySetInnerHTML={{ __html: answer }} onClick={() => props.selectAnswer(question, answer)} key={answer}></div>)}
    </Fragment>
  );
};


Question.defaultProps = {
  question: { incorrect_answers: [], correct_answer: '' }
}

export default Question;
