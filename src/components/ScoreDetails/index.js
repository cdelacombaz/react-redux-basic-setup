import React from 'react';

import './styles.css';

const ScoreDetails = props => {
  return (
    <section className='ScoreDetails-container'>
      {props.details.map(q => {
        return (
          <div className='ScoreDetails-card' key={q.anser}>
            <p dangerouslySetInnerHTML={{ __html: q.question }} />
            <p dangerouslySetInnerHTML={{ __html: `Correct answer: ${q.correctAnswer}` }} />
            <p>Your answer: <span dangerouslySetInnerHTML={{ __html: q.userAnswer }} className={q.userAnswer === q.correctAnswer ? 'ScoreDetails-correct' : 'ScoreDetails-wrong'} /></p>
          </div>)
      })}
    </section>
  )
}

export default ScoreDetails;
