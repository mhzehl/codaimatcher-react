import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar';
import './Student.sass'

class Student extends PureComponent {
  render() {

    const { currentUser } = this.props
    console.log('student: ', this.props)

    return(
      <div className='student'>
        <Avatar src="#" size={200} />
        <h2>Hello</h2>
      </div>
    )
  }
}

const mapStatetoProps = ({ currentUser }) => ({
  currentUser,
})

export default connect(mapStatetoProps)(Student)
