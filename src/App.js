import React from 'react'
import Navigation from './components/Navigation'
import Title from './components/Title'
import './App.sass'

class App extends React.Component {
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
