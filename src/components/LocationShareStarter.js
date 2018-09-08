import React from 'react'
import { connect } from 'react-redux'
import { startSharingLocation } from '../reducers/locationShareReducer'

class LocationShareStarter extends React.Component {

  componentDidMount() {
    const locationShareId = this.props.match.params.id
    const locationShare = this.props.locationShare
    if (!locationShare.sharing && locationShareId) {
      console.log('locationShare in starter: ', locationShare)
      this.props.startSharingLocation(locationShareId)
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  locationShare: state.locationShare
})

const connectedLocationShareStarter = connect(mapStateToProps, { startSharingLocation })(LocationShareStarter)

export default connectedLocationShareStarter
