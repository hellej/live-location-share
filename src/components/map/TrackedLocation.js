import React from 'react'
import { connect } from 'react-redux'
import { getLoadedLayerFromMap } from './../../mapboxhelper'

class TrackedLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null
    }
    this.layerId = 'trackedLocation'
  }

  circleStyle = {
    'circle-color': 'transparent',
    'circle-stroke-color': '#de00ea',
    'circle-radius': 3,
    'circle-stroke-width': 2
  }

  componentDidMount() {
    const { map, trackedLocation } = this.props
    map.on('load', () => {
      map.addSource(this.layerId, { type: 'geojson', data: trackedLocation })
      map.addLayer({ id: this.layerId, source: this.layerId, type: 'circle', paint: this.circleStyle })
    })
  }

  componentDidUpdate = async (prevProps) => {
    const { trackedLocation, tracking, map } = this.props
    const layer = await getLoadedLayerFromMap(map, this.layerId)

    if (tracking) {
      map.setFilter(this.layerId, null)
    } else {
      map.setFilter(this.layerId, ['==', '-', ''])
    }

    layer.setData(trackedLocation)
    map.moveLayer('userLocation', this.layerId)

  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  trackedLocation: state.locationTrack.locationFeature,
  tracking: state.locationTrack.tracking
})

const ConnectedTrackedLocation = connect(mapStateToProps, null)(TrackedLocation)

export default ConnectedTrackedLocation