import React, { Component } from 'react'
import './App.css'

import CDMXMap from './CDMX'

class App extends Component {
  onClick = (e) => {
    console.log(e)
  }
  render () {
    return (
      <div className='App'>
        <h1>CDMX</h1>
        <CDMXMap onClick={this.onClick} />
      </div>
    )
  }
}

export default App
