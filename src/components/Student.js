import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar';
import './Student.sass'

class Student extends PureComponent {
  render() {

    const { currentUser } = this.props

    return(
      <div className='student'>
        <Avatar src="http://res.cloudinary.com/dyl4vtost/image/upload/v1487858487/Melvin_1_copy_fpel1a.jpg" size={200} />
        <h2>{ currentUser.name }</h2>
      </div>
    )
  }
}

const mapStatetoProps = ({ currentUser }) => ({
  currentUser,
})

export default connect(mapStatetoProps)(Student)
