import React, { useState } from 'react';
import { connect } from 'react-redux';

import ScoreDetails from '../ScoreDetails';
import './styles.css';

const Score = props => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className='Score-container'>
      <p className='Score-title'>Score</p>
      <p className='Score-info'>Out of {props.totalAnswers} questions, you answered {props.correctAnswers} correctly!</p>
      {showDetails ? <ScoreDetails details={props.details} /> : <></>}
      <p className='Score-details' onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide details' : 'Show details'}</p>
    </main>)
};

const mapStateToProps = state => {
  const data = state.scoreReducer
  const correctAnswers = data.filter(item => item.correct).length
  const totalAnswers = data.length

  return {
    details: state.scoreReducer,
    correctAnswers,
    totalAnswers
  };
};

export default connect(mapStateToProps)(Score);
