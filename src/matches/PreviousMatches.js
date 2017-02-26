import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import Title from '../components/Title'
import PreviousMatchCard from './PreviousMatchCard'
import './PreviousMatches.sass'

class PreviousMatch extends PureComponent {
  render() {

    return(
      <div className='prev-matches wrapper'>
        <Title content='Previous Matches' />
        <div className='prev-match-cards'>
          <PreviousMatchCard />
        </div>
      </div>
    )
  }
}

export default PreviousMatch
