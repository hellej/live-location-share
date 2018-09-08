import React from 'react'
import { connect } from 'react-redux'
import { getLoadedLayerFromMap } from './../../mapboxhelper'

class UserLocation extends React.Component {

  layerId = 'userLocation'

  circleStyle = {
    'circle-color': 'transparent',
    'circle-stroke-color': '#00c7ff',
    'circle-radius': 7,
    'circle-stroke-width': 2
  }

  componentDidMount() {
    const { map, userLocation } = this.props
    map.on('load', () => {
      map.addSource(this.layerId, { type: 'geojson', data: userLocation })
      map.addLayer({ id: this.layerId, source: this.layerId, type: 'circle', paint: this.circleStyle })
    })
  }

  componentDidUpdate = async (prevProps) => {
    const { userLocation, map } = this.props
    const layer = await getLoadedLayerFromMap(map, this.layerId)
    layer.setData(userLocation)
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  userLocation: state.userLocation.userLocation
})

const ConnectedUserLocation = connect(mapStateToProps, null)(UserLocation)

export default ConnectedUserLocation
