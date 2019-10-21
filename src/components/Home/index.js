import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import { getQuestions } from '../../store/actions/actions';

class Home extends Component {
  async componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  render() {
    return (
      <main className='Home-container'>
        <Link className='Home-start' to='trivial/1'>Start</Link>
      </main>
    );
  }
}

export default connect()(Home);
