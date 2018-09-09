import React from 'react'
import { connect } from 'react-redux'
import { startTrackingLocation, createLocationRequest } from '../reducers/locationTrackReducer'

class TrackLocationStarter extends React.Component {

  componentDidMount = async () => {
    const locationShareId = this.props.match.params.id
    const tracking = this.props.locationTrack.tracking
    console.log('tracking: ', tracking)

    if (locationShareId === undefined && !tracking) {
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

const mapStateToProps = (state) => ({
  locationTrack: state.locationTrack
})

const connectedTrackLocationStarter = connect(mapStateToProps, mapDispatchToProps)(TrackLocationStarter)

export default connectedTrackLocationStarter
