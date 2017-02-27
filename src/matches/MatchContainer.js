import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Match from './Match'
import UnpickedStudents from '../admin/UnpickedStudents'
import PreviousMatches from './PreviousMatches'
import { Link } from 'react-router'
import SignIn from '../users/SignIn'
import fetchClassDay from '../actions/classday/fetch'
import './MatchContainer.sass'

class MatchContainer extends PureComponent {
  static propTypes = {
    //ToDo
  }

  componentDidMount() {
    this.props.fetchClassDay(this.props.currentUser)
    // if other guy from state empty, means need to be fetched
    // this.props.fetchOtherGuyProfile()
  }

  render() {
    const { currentUser } = this.props

    if(this.props.currentUser === null) {
      return(
        <div>
          <h1>Welcome to CodaiMatcher</h1>
          <SignIn />
          <p>New to the class? <Link to={`sign-up`}>Sign up.</Link></p>
        </div>

      )
    } else {
      return(

        <div className="matches wrapper">
          <header>
            <Title content="Match of the Day" />
            <Match />
            <PreviousMatches />
          </header>
        </div>
      )
    }
  }
}

const mapStatetoProps = ({ currentUser, classDay }) => ({
  currentUser,
  classDay
  // otherGuy (from state, iniatialy empty)
})

export default connect(mapStatetoProps, { fetchClassDay })(MatchContainer)
