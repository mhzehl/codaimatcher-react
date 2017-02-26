import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Student from '../components/Student';

class Match extends PureComponent {
  render() {

    return(
      <div className='match'>
        <Student />
      </div>
    )
  }
}

export default Match
