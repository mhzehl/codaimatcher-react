import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Student from '../components/Student'
import Avatar from 'material-ui/Avatar';

class UnpickedStudents extends PureComponent {
  render() {

    const { currentUser } = this.props
    console.log('student: ', this.props)

    return(
      <div className='unpicked-student'>
        <Student />
      </div>
    )
  }
}

const mapStatetoProps = ({ currentUser }) => ({
  currentUser,
})

export default connect(mapStatetoProps)(UnpickedStudents)
