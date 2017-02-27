import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Student from '../components/Student';
import MatchIcon from '../assets/images/match-icon.png'
import './Match.sass'

class Match extends PureComponent {
  render() {

    const { classDay } = this.props

    return(
      <div className='match wrapper'>
        <Student />
        <img src={ MatchIcon } className='match-icon' />
        <Student />
      </div>
    )
  }
}

const mapStatetoProps = ({ currentUser, classDay }) => ({
  currentUser,
  classDay
  // otherGuy (from state, iniatialy empty)
})

export default connect(mapStatetoProps)(Match)
