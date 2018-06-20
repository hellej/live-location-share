import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import history from './history'
import { StyledMenuContainer } from './components/StyledLayout'
import { StyledNavLink } from './components/Buttons'
import Map from './components/map/Map'
import UserLocation from './components/map/UserLocation'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import LocationShareForm from './components/LocationShareForm'
import LocationRequestForm from './components/LocationRequestForm'


class App extends Component {

  render() {
    return (
      <Router history={history} >
        <div>
          <Route exact path='/' render={() =>
            <StyledMenuContainer>
              <StyledNavLink to='/locationshare' activeClassName={'active'} > Share Location </StyledNavLink>
              <StyledNavLink to='/requestlocation' activeClassName={'active'} > Follow Location </StyledNavLink>
              {/* <StyledNavLink to='/signup' activeClassName={'active'} > Sign Up </StyledNavLink>
              <StyledNavLink to='/login' activeClassName={'active'} > Login </StyledNavLink> */}
            </StyledMenuContainer>}
          />
          <Route path='/login' render={({ location }) => <LoginForm location={location} />} />
          <Route path='/signup' render={({ location }) => <SignUpForm location={location} />} />
          <Route path='/requestlocation' render={({ location }) => <LocationRequestForm location={location} />} />
          <Route path='/locationshare' render={({ location }) => <LocationShareForm location={location} />} />

          <Map>
            <UserLocation />
          </Map>
        </div>
      </Router>
    )
  }
}

export default App
