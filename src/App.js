import React from 'react'
import Navigation from './components/Navigation'
import Title from './components/Title'
import './App.sass'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }
  
  render() {
    return (
      <div className='app'>
        <Navigation />
        { this.props.children }
      </div>
    )
  }
}

export default App
