import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Match from './Match'
import UnpickedStudents from '../admin/UnpickedStudents'
import PreviousMatches from './PreviousMatches'
import fetchMatches from '../actions/matches/fetch'
import fetchStudents from '../actions/students/fetch'
import fetchClassDay from '../actions/classday/fetch'
import './MatchContainer.sass'

class MatchContainer extends PureComponent {
  static propTypes = {
    fetchMatches: PropTypes.func,
    fetchStudents: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchClassDay(this.props.currentUser)
  }

  render() {

    const { currentUser } = this.props

    return(

      <div className="matches wrapper">
        <header>
          <Title content="Match of the Day" />
          <Match />
          <PreviousMatches />
          <UnpickedStudents />
        </header>
      </div>
    )
  }
}

const mapStatetoProps = ({ currentUser, matches, students }) => ({
  currentUser,
  matches,
  students
})

export default connect(mapStatetoProps, { fetchClassDay })(MatchContainer)
