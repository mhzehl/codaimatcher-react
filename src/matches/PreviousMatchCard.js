import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './PreviousMatchCard.sass'

const style = {
  height: 80,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class PreviousMatchCard extends PureComponent {

  render() {

    return(
      <Paper style={style} zDepth={4}>
        <div className='card-details'>
          <div className='student-details'>
            <Avatar src="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/15253651_1142996012482617_1414440607833412522_n.jpg?oh=0967e6300f897dfeaf1d98d83ba1df16&oe=593DF000" size={60}/>
            <p>Vincent Stoop</p>
          </div>
          <div className='day-details'>
            <h3>04-04-2017</h3>
          </div>
        </div>
      </Paper>
    )
  }
}

export default PreviousMatchCard
