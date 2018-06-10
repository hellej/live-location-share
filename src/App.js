import React, { Component } from 'react'

import LocationTracker from './components/map/LocationTracker'
import Map from './components/map/Map'


class App extends Component {

  render() {
    return (
      <div>
        <Map>
          <LocationTracker />
        </Map>
      </div>
    )
  }
}

export default App
