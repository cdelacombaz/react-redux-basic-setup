import { STORE_QUESTIONS } from '../constants';
import { STORE_SCORE } from '../constants';

const storeQuestions = questions => ({
  type: STORE_QUESTIONS,
  payload: questions
});

export const getQuestions = () => (dispatch, getState) => {
  return fetch('https://opentdb.com/api.php?amount=3')
    .then(data => data.json())
    .then(data => {
      const questions = data.results.map((q, i) => {
        return { ...q, id: i + 1 }
      })
      const action = storeQuestions(questions)
      dispatch(action)
    }).catch(console.error)
};

const storeScore = (result) => ({
  type: STORE_SCORE,
  payload: result
});

export const evaluateAnswer = (question, answer) => (dispatch, getState) => {
  const result = {
    question: question.question,
    userAnswer: answer,
    correctAnswer: question.correct_answer,
    correct: question.correct_answer === answer
  }
  const action = storeScore(result)
  dispatch(action)
};
