import React from 'react'
import { connect } from 'react-redux'
import { startTrackingLocation, createLocationRequest } from '../reducers/locationTrackReducer'

class TrackLocationStarter extends React.Component {

  componentDidMount = async () => {
    let locationShareId = this.props.match.params.id
    if (locationShareId === undefined) {
      console.log('no track id -> create request')
      await this.props.createLocationRequest()
    } else {
      console.log('id in trackLocation mount(): ', locationShareId)
      this.props.startTrackingLocation(locationShareId)
    }
  }

  render() {
    return (
      null
    )
  }
}

const mapDispatchToProps = {
  startTrackingLocation,
  createLocationRequest
}

const connectedTrackLocationStarter = connect(null, mapDispatchToProps)(TrackLocationStarter)

export default connectedTrackLocationStarter
