import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../Question';
import { evaluateAnswer } from '../../store/actions/actions';
import './styles.css';

class Trivial extends Component {
  selectAnswer = (question, answer) => {
    // check if answer is correct
    this.props.dispatch(evaluateAnswer(question, answer))

    // redirect to next answer or to result
    const currentQuestionId = Number(this.props.match.params.order)
    const lastQuestion = currentQuestionId === this.props.questions.length
    lastQuestion ? this.props.history.push('/score') : this.props.history.push(`/trivial/${currentQuestionId + 1}`)
  }

  render() {
    return (
      <main className='Trivial-container'>
        <Question question={this.props.currentQuestion} selectAnswer={this.selectAnswer} />
      </main>)
  }
}

const mapStateToProps = (state, props) => {
  const currentQuestionId = props.match.params.order
  const currentQuestion = state.questionReducer.find(q => q.id === Number(currentQuestionId))
  return { questions: state.questionReducer, currentQuestion }
}

export default connect(mapStateToProps)(Trivial);
