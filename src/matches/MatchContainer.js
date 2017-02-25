import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import fetchMatches from '../actions/matches/fetch'
import fetchStudents from '../actions/students/fetch'
import './MatchContainer.sass'

class MatchContainer extends PureComponent {
  static propTypes = {
    fetchMatches: PropTypes.func,
    fetchStudents: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchStudents()
  }

  render() {

    return(

      <div className="matches wrapper">
        <header>
          <Title content="Match of the Day" />
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

export default connect(mapStatetoProps, { fetchMatches, fetchStudents })(MatchContainer)
