import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import history from './history'
import { StyledMenuContainer, FlexMarginAuto } from './components/StyledLayout'
import { Button } from './components/Buttons'
import Map from './components/map/Map'
import SharedLocation from './components/map/SharedLocation'
import TrackedLocation from './components/map/TrackedLocation'
import UserLocation from './components/map/UserLocation'
import { trackUserLocation } from './reducers/userLocationReducer'
import { submitLocationShareStart } from './reducers/locationShareReducer'
import { submitLocationRequest } from './reducers/locationTrackReducer'
import TrackLocationStarter from './components/TrackLocationStarter'
import LocationShareStarter from './components/LocationShareStarter'
import LocationShareMonitor from './components/LocationShareMonitor'
import TrackLocationMonitor from './components/TrackLocationMonitor'

class App extends Component {

  componentDidMount = () => {
    this.props.trackUserLocation()
  }

  render() {
    return (
      <Router history={history} >
        <div>
          <StyledMenuContainer>
            <Route exact path='/' render={() =>
              <FlexMarginAuto>
                <Button onClick={(e) => this.props.submitLocationShareStart(e)}>Share Location</Button>
                <Button onClick={(e) => this.props.submitLocationRequest(e)}>Request Location</Button>
              </FlexMarginAuto>}
            />
            <Route exact path='/tracklocation' component={TrackLocationStarter} />
            <Route path='/tracklocation/:id' component={TrackLocationStarter} />
            <Route path='/sharelocation/:id' component={LocationShareStarter} />
            <LocationShareMonitor />
            <TrackLocationMonitor />
          </StyledMenuContainer>
          <Map>
            <UserLocation />
            <SharedLocation />
            <TrackedLocation />
          </Map>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  trackUserLocation,
  submitLocationShareStart,
  submitLocationRequest
}

const ConnectedApp = connect(null, mapDispatchToProps)(App)

export default ConnectedApp
