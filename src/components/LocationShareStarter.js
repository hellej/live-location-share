import React from 'react'
import { connect } from 'react-redux'
import { startSharingLocation } from '../reducers/locationShareReducer'

class LocationShareStarter extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    const locationShare = this.props.locationShare
    if (!locationShare.sharing && id) {
      console.log('locationShare in starter: ', locationShare)
      this.props.startSharingLocation(id)
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
